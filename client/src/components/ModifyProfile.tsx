import { useState } from "react";
import type { userDataTypes } from "../types/UserData";

function ModifyProfile() {
  const forbiddenCharacters = /[^a-zA-Z0-9]/g;
  const [userData, setUserData] = useState<userDataTypes | null>(null);
  ({
    email: "",
    pseudo: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value.replace(forbiddenCharacters, ""),
    });
  };

  return (
    <>
      <form className="login-form">
        <label htmlFor="email" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputUserData}
          className="login-input"
        />

        <label htmlFor="pseudo" className="login-label">
          Identifiant:
        </label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          onChange={handleInputUserData}
          className="login-input"
        />

        <label htmlFor="password" className="login-label">
          Mot de passe:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputUserData}
          className="login-input"
        />

        <label htmlFor="passwordConfirm" className="login-label">
          Confirmer le mot de passe:
        </label>
        <input
          type="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleInputUserData}
          className="login-input"
        />

        <fieldset>
          <input
            type="radio"
            id="cuisiner"
            name="gender"
            value="male"
            onChange={handleInputUserData}
            className="login-radio"
          />
          <label htmlFor="cuisiner" className="login-label">
            Cuisiner
          </label>

          <input
            type="radio"
            id="cuisinere"
            name="gender"
            value="female"
            onChange={handleInputUserData}
            className="login-radio"
          />
          <label htmlFor="cuisinere" className="login-label">
            Cuisinère
          </label>
        </fieldset>

        <fieldset className="login-fieldset">
          <button
            type="submit"
            id="login"
            aria-label="login"
            className="submit-button"
          >
            Sauvegarder les modifications
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default ModifyProfile;
