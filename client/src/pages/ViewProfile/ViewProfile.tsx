import ModifyProfile from "../../components/ModifyProfile";
import SeeProfile from "../../components/SeeProfile";
import "./ViewProfile.css";
import { useState } from "react";

function ViewProfile() {
  const [activeSection, setActiveSection] = useState("");

  const handleProfileClick = () => {
    setActiveSection("profile");
  };

  const handleRecipeClick = () => {
    setActiveSection("recipes");
  };

  return (
    <main className="profile-view">
      <nav>
        <button type="button" onClick={handleProfileClick}>
          Modifier mon profil
        </button>
        <button type="button" onClick={handleRecipeClick}>
          Recettes
        </button>
      </nav>
      <header>
        <SeeProfile />
      </header>

      <section>
        {activeSection === "profile" && (
          <div>
            <h2>Modifier mon profil</h2>
            <ModifyProfile />
          </div>
        )}
      </section>

      <section>
        {activeSection === "recipes" && (
          <article>
            <h2>Mes recettes</h2>
            <ul>
              <li>
                <h3>Recette 1</h3>
                <p>description de la recette</p>
              </li>
              <li>
                <h3>Recette 2</h3>
                <p>description de la recette</p>
              </li>
              <li>
                <h3>Recette 3</h3>
                <p>description de la recette</p>
              </li>
            </ul>
          </article>
        )}
      </section>
    </main>
  );
}

export default ViewProfile;
