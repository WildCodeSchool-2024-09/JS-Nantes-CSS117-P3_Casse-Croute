import { useEffect, useState } from "react";
import UserScroll from "../../components/ScrollUser";
import type { userData } from "../../types/UserData";

function DashBoardUser() {
  const [users, setUsers] = useState([] as userData[]);
  const [selectUser, setSelectUser] = useState<userData | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        setUsers(data);
      });
  }, []);

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
        <button type="button">Supprimer le compte</button>
      </section>
      {selectUser && (
        <label className="container-toggle-switch">
          <input
            type="checkbox"
            aria-label="Activer les droits administrateur"
            checked={!!selectUser.est_admin}
            onChange={(e) => {
              const value = {
                est_admin: e.currentTarget.checked,
              };
              fetch(
                `${import.meta.env.VITE_API_URL}/api/users/${selectUser.id}`,
                {
                  method: "put",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ est_admin: value }),
                },
              );
            }}
          />
          <span>.</span>
        </label>
      )}
    </section>
  );
}

export default DashBoardUser;
