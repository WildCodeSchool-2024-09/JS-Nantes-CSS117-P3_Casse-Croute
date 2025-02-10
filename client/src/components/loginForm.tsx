import { useState } from "react";
import type { loginDataTypes } from "../types/LoginData";

export function LoginForm() {
  const [loginData, setLoginData] = useState<loginDataTypes>({});

  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="username">nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInputLogin}
        />
        <label htmlFor="password">mot de passe:</label>
        <input
          type="password"
          id="submit"
          name="password"
          onChange={handleInputLogin}
        />
        <button type="submit" id="login" aria-label="login">
          se connecter
        </button>
        <button type="button" id="create" aria-label="create account">
          s'inscrire
        </button>
      </form>
    </>
  );
}
export default LoginForm;
