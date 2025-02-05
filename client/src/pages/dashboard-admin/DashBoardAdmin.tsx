import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import "./dashboard-user.css";
import { useState } from "react";
function DashboardAdmin() {
  const [active] = useState();
  return (
    <>
      <nav className="container-user-recipes">
        <section>
          <NavLink
            style={{
              backgroundColor: active ? "#03224c" : "#FFF",
              color: active ? "white" : "black",
            }}
            to="dashboard-user"
          >
            Utilisateur
          </NavLink>
          <NavLink to="dashboard-recipes">Recette</NavLink>
        </section>
      </nav>
      <Outlet />
    </>
  );
}

export default DashboardAdmin;
