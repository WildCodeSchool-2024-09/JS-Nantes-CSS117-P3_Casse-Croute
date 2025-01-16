import ModifyProfile from "../../components/ModifyProfile";
import SeeProfile from "../../components/SeeProfile";
import "./ViewProfile.css";
import { useRef } from "react";

function ViewProfile() {
  const profileRef = useRef<HTMLFormElement>(null);
  const recipeListRef = useRef<HTMLFormElement>(null);

  const profileClass = profileRef.current?.classList;
  const recipieClass = recipeListRef.current?.classList;

  const clickHandlerToggleProfile = () => {
    profileClass?.remove("hide");
    if (!recipieClass?.contains("hide")) {
      recipieClass?.add("hide");
    }
  };
  const clickHandlerToggleRecipe = () => {
    recipieClass?.remove("hide");
    if (!profileClass?.contains("hide")) {
      profileClass?.add("hide");
    }
  };
  return (
    <main className="profile-view">
      <nav>
        <button type="button" onClick={clickHandlerToggleProfile}>
          Modifier mon profil
        </button>
        <button type="button" onClick={clickHandlerToggleRecipe}>
          Recettes
        </button>
      </nav>
      <header>
        <SeeProfile />
      </header>

      <section>
        <form ref={profileRef}>
          <h2>Modifier mon profil</h2>
          <ModifyProfile />
        </form>
      </section>
      <section>
        <article ref={recipeListRef} className="hide">
          {/* This is just a placeholder section whilst I await the recipe component. Then I'll be mapping out some favourites (in a separate PR, of course!) */}
          <h2>Mes recettes</h2>
          <ul>
            <li>
              <p>Recette 1</p>
            </li>
            <li>
              <p>Recette 2</p>
            </li>
            <li>
              <p>Recette 3</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default ViewProfile;
