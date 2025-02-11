import { useEffect, useState } from "react";
import DeleteUsers from "../../components/DeleteUsers";
import UserScroll from "../../components/ScrollUser";
import type { userData } from "../../types/UserData";
import "./dashboard-recipes-user.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import HorizontalRecipeCard from "../../components/HorizontalRecipeCard";
import type { RecipeH } from "../../types/RecipeValues";

function DashBoardUser() {
  const [users, setUsers] = useState<userData[]>([]);
  const [selectUser, setSelectUser] = useState<userData | null>(null);
  const [recipes, setRecipes] = useState<RecipeH[]>([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const handleVisibility = () => {
    if (selectUser) {
      return setVisible(!visible);
    }
    toast.warn("Veuillez selectionner un utilisateur");
  };

  // function to retrieve users and filter to retrieve only the nickname

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: userData[]) => {
        const filteredData = data.filter((user) => user.pseudo);
        setUsers(filteredData);
      })
      .catch((err) => {
        toast.error(`Erreur lors de la récupération des utilisateurs ${err}`);
      });
  }, []);

  // function to retrieve only the recipes of selected users

  useEffect(() => {
    if (selectUser) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${selectUser.id}/recipes`)
        .then((response) => response.json())
        .then((data: RecipeH[]) => {
          setRecipes(data);
        })
        .catch((err) => {
          toast.error(`Erreur lors de la récupération des recettes ${err}`);
        });
    }
  }, [selectUser]);

  // function to switch a user's role to admin or remove it

  const handleChange = (selectUser: userData) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      return toast.warn("Accès refusé : droits insuffisants.");
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
          toast.success("Rôle de l'utilisateur mis à jour avec succès 🎉");
        } else if (response.status === 401) {
          toast.warn("Accès refusé : droits insuffisants.");
        } else {
          toast.error(
            "Erreur lors de la mise à jour des droits administrateur.",
          );
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
    <>
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
      <section className="container-recipes-user">
        <nav>
          <NavLink
            to="user-recipes-modify"
            className={({ isActive }) =>
              isActive ? "active-background" : "inactive-background"
            }
          >
            Modifier
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-background" : "inactive-background"
            }
          >
            Supprimer
          </NavLink>
        </nav>
        <figure>
          {recipes.map((el, index) => {
            return (
              <HorizontalRecipeCard
                key={`${el.id}-${index}`}
                titre={el.titre}
                description={el.description}
                image_url={el.image_url}
              />
            );
          })}
        </figure>
      </section>
    </>
  );
}

export default DashBoardUser;
