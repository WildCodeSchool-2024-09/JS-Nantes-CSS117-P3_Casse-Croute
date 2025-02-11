import { NavLink, Outlet } from "react-router-dom";
import "../styles/user-recipes.css";

function UserRecipes() {
  return (
    <section className="container-admin-user-recipes">
      <NavLink
        to="modify"
        className={({ isActive }) =>
          isActive ? "active-background" : "inactive-background"
        }
      >
        Modifier
      </NavLink>
      <NavLink
        to="delete"
        className={({ isActive }) =>
          isActive ? "active-background" : "inactive-background"
        }
      >
        Supprimer
      </NavLink>
      <Outlet />
    </section>
  );
}
export default UserRecipes;
