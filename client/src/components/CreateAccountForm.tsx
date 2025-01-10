import { useState } from "react";
import type { userDataTypes } from "../types/UserData";

function CreateAccount() {
  const forbiddenCharacters = /[^a-zA-Z0-9]/g;
  const [userData, setUserData] = useState<userDataTypes>({
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

  console.warn(userData);
  return (
    <>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputUserData}
          className="login-input"
        />
        <br />
        <label htmlFor="username">Identifiant:</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          onChange={handleInputUserData}
          className="login-input"
        />
        <br />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputUserData}
          className="login-input"
        />
        <br />
        <label htmlFor="password">Confirmer le mot de passe:</label>
        <input
          type="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleInputUserData}
          className="login-input"
        />
        <br />
        <fieldset>
          <input
            type="radio"
            id="cuisiner"
            name="gender"
            value="male"
            onChange={handleInputUserData}
            className="login-radio"
          />
          <label htmlFor="cuisiner">Cuisiner</label>

          <input
            type="radio"
            id="cuisinere"
            name="gender"
            value="female"
            onChange={handleInputUserData}
            className="login-radio"
          />
          <label htmlFor="cuisinere">Cuisinère</label>
        </fieldset>
        <br />
        <fieldset>
          <button
            type="button"
            id="login"
            aria-label="login"
            className="submit-button"
          >
            Page d' acceuil
          </button>
          <button
            type="submit"
            id="login"
            aria-label="login"
            className="submit-button"
          >
            S'inscrire
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default CreateAccount;
