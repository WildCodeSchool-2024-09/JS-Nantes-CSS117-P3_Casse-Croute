import { useEffect, useState } from "react";
import DeleteUsers from "../../components/DeleteUsers";
import UserScroll from "../../components/ScrollUser";
import type { userData } from "../../types/UserData";

function DashBoardUser() {
  const [users, setUsers] = useState<userData[]>([]);
  const [selectUser, setSelectUser] = useState<userData | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const handleVisibility = () => {
    if (selectUser) {
      return setVisible(!visible);
    }
    alert("Veuillez selectionner un utilisateur");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        const filteredData = data.filter((user) => user.pseudo);
        setUsers(filteredData);
      })
      .catch((err) => {
        alert(`Erreur lors de la récupération des utilisateurs ${err}`);
      });
  }, []);

  const handleChange = (selectUser: userData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return alert("Accès refusé : droits insuffisants.");
    }
    const updatedUser = { selectUser, est_admin: !selectUser.est_admin };
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${selectUser.id}`, {
      method: "put",
      headers: {
        Authorisation: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ est_admin: updatedUser.est_admin }),
    })
      .then((response) => {
        if (response.status === 204) {
          alert("Rôle de l'utilisateur mis à jour avec succès 🎉");
        } else if (response.status === 401) {
          alert("Accès refusé : droits insuffisants.");
        } else {
          alert("Erreur lors de la mise à jour des droits administrateur.");
        }
        return fetch(`${import.meta.env.VITE_API_URL}/api/users`);
      })
      .then((response) => response.json())
      .then((data: userData[]) => {
        setUsers(data);
        const reloadUser = data.find((user) => user.id === selectUser.id);
        if (reloadUser) setSelectUser(reloadUser);
      });

    setLoading(false);
  };

  return (
    <section className="container-dashboard-admin">
      <label htmlFor="Recherche">Utilisateur</label>
      <input
        type="text"
        name="name"
        placeholder="Recherche un utilisateur"
        onChange={(event) => {
          setSearchUser(event.currentTarget.value);
        }}
      />
      <UserScroll
        users={users}
        searchUser={searchUser}
        setSelectUser={setSelectUser}
      />
      {selectUser && (
        <section>
          <figure>
            <img
              src={
                selectUser.photo_profil
                  ? selectUser.photo_profil
                  : "/assets/images/profil.png"
              }
              alt="Une illustration de profile"
            />
          </figure>
          <article>
            <h2>{selectUser.pseudo}</h2>
            <p>{selectUser.email}</p>
          </article>
        </section>
      )}
      <section>
        <legend>Administrateur</legend>
        <button
          className="button-delete-user"
          onClick={handleVisibility}
          type="button"
        >
          Supprimer le compte
        </button>
        {visible && <div className="overlay-user-delete">.</div>}

        {visible && selectUser && (
          <DeleteUsers
            selectUser={selectUser}
            handleVisibility={handleVisibility}
          />
        )}
      </section>
      {selectUser && (
        <label className="container-toggle-switch">
          <input
            disabled={loading}
            type="checkbox"
            aria-label="Activer les droits administrateur"
            checked={!!selectUser.est_admin}
            onChange={() => handleChange(selectUser)}
          />
          <span>.</span>
        </label>
      )}
    </section>
  );
}

export default DashBoardUser;
