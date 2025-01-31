import "./dashboard-user.css";

function DashBoardUser() {
  return (
    <section className="container-user-dashboard">
      <label htmlFor="Recherche">Utilisateur</label>
      <input type="text" placeholder="Recherche un utilisateur" />

      <ul>
        <li>Maurice Albert </li>
      </ul>
    </section>
  );
}

export default DashBoardUser;
