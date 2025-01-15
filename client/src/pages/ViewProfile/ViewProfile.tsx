import ModifyProfile from "../../components/ModifyProfile";
import SeeProfile from "../../components/SeeProfile";
import "./ViewProfile.css";

function ViewProfile() {
  const clickHandlerToggle = () => {
    document.querySelector("#showProfile")?.classList.toggle("hide");
    document.querySelector("#showRecipeList")?.classList.toggle("hide");
  };

  return (
    <main className="profile-view">
      <nav>
        <button type="button" onClick={clickHandlerToggle}>
          Modifier mon profil
        </button>
        <button type="button" onClick={clickHandlerToggle}>
          Recettes
        </button>
      </nav>
      <header>
        <SeeProfile />
      </header>

      <section>
        <form id="showProfile">
          <h2>Modifier mon profil</h2>
          <ModifyProfile />
        </form>
      </section>
      <section>
        <article id="showRecipeList" className="hide">
          <h2>Mes recettes</h2>
          <ul>
            <li>Recette 1</li>
            <li>Recette 2</li>
            <li>Recette 3</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default ViewProfile;
