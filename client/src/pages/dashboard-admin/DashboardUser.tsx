import { useEffect, useState } from "react";
import "./dashboard-user.css";
import type { userData } from "../../types/UserData";

function DashBoardUser() {
  const [users, setUsers] = useState([] as userData[]);
  const [selectUser, setSelectUser] = useState<userData | null>(null);
  console.info(selectUser);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        setUsers(data);
      });
  }, []);

  return (
    <section className="container-user-dashboard">
      <label htmlFor="Recherche">Utilisateur</label>
      <input type="text" placeholder="Recherche un utilisateur" />

      <menu>
        <ul>
          {users.map((el) => {
            return (
              <li key={el.id}>
                <button type="button" onClick={() => setSelectUser(el)}>
                  {el.pseudo}
                </button>
              </li>
            );
          })}
        </ul>
      </menu>
      <section>
        <figure>
          <img src="/assets/images/favicon.png" alt="" />
        </figure>
        {selectUser && (
          <article>
            <h2>{selectUser.pseudo}</h2>
            <p>{selectUser.email}</p>
          </article>
        )}
      </section>
      <section>
        <legend>Administrateur</legend>
        <button type="button">Supprimer le compte</button>
      </section>
      <label className="container-toggle-switch">
        <input type="checkbox" />
        <span>.</span>
      </label>
    </section>
  );
}

export default DashBoardUser;
