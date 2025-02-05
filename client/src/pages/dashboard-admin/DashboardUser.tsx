import { useEffect, useState } from "react";
import DeleteUsers from "../../components/DeleteUsers";
import UserScroll from "../../components/ScrollUser";
import type { userData } from "../../types/UserData";

function DashBoardUser() {
  const [users, setUsers] = useState<userData[]>([]);
  const [selectUser, setSelectUser] = useState<userData | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVisibility = () => {
    if (selectUser) {
      return setVisible(!visible);
    }
    alert("Veuillez selectionné un utilisateur");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des utilisateurs", err);
      });
  }, []);

  const handleChange = (selectUser: userData) => {
    setLoading(true);
    const user = {
      est_admin: !selectUser.est_admin,
    };
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${selectUser.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        console.warn(data);
        setUsers(data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des utilisateurs", err);
      });
    setLoading(false);
  };

  return (
    <section className="container-dashboard-admin">
      <label htmlFor="Recherche">Utilisateur</label>
      <input type="text" placeholder="Recherche un utilisateur" />
      <UserScroll users={users} setSelectUser={setSelectUser} />
      {selectUser && (
        <section>
          <figure>
            <img
              src={
                selectUser.photo_profil
                  ? selectUser.photo_profil
                  : "/assets/images/favicon.png"
              }
              alt=""
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
        {visible && selectUser ? (
          <DeleteUsers
            selectUser={selectUser}
            handleVisibility={handleVisibility}
          />
        ) : (
          ""
        )}
      </section>
      {selectUser && (
        <>
          <p>{selectUser.est_admin.toString()}</p>
          <label className="container-toggle-switch">
            <input
              disabled={loading}
              type="checkbox"
              aria-label="Activer les droits administrateur"
              checked={!!selectUser.est_admin}
              defaultChecked={!!selectUser.est_admin}
              onChange={() => handleChange(selectUser)}
            />
            <span>.</span>
          </label>
        </>
      )}
    </section>
  );
}

export default DashBoardUser;
