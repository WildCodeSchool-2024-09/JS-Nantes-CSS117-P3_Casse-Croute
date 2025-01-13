import { useState } from "react";
import "..pages/Login/Login.css";

export function LoginFormula() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleInputChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <>
      <form>
        <label htmlFor="username">nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInputChangeUsername}
        />
        <label htmlFor="password">mot de passe:</label>
        <input
          type="password"
          id="submit"
          name="password"
          onChange={handleInputChangePassword}
        />
        <button type="submit" id="login" aria-label="login">
          se connecter
        </button>
        <button type="button" id="create" aria-label="create account">
          s'inscrire
        </button>
        {username ? (
          <p>nom d'utilisateur: {username} est deja inscrit </p>
        ) : null}
        {password ? <p>veuillez renseigner un mot de passe </p> : null}
      </form>
    </>
  );
}
