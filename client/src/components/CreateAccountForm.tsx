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

  // const handleInputPassword = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const { value } = e.target;
  //   setPassword(value);
  // };
  console.warn(userData);
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputUserData}
        />
        <label htmlFor="username">Identifiant:</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          onChange={handleInputUserData}
        />
        <label htmlFor="password">mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputUserData}
        />
        <label htmlFor="password">Confirmer le mot de passe:</label>
        <input
          type="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleInputUserData}
        />
        <fieldset>
          <input
            type="radio"
            id="cuisiner"
            name="gender"
            value="male"
            onChange={handleInputUserData}
          />
          <label htmlFor="cuisiner">cuisiner</label>

          <input
            type="radio"
            id="cuisinere"
            name="gender"
            value="female"
            onChange={handleInputUserData}
          />
          <label htmlFor="cuisinere">cuisinère</label>
        </fieldset>

        <button type="submit" id="login" aria-label="login">
          se connecter
        </button>
      </form>
    </>
  );
}
export default CreateAccount;
