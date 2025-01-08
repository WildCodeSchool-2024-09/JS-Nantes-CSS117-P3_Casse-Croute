import { useState } from "react";

function LoginFormula() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   console.log("username", username);
  // }

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
        <label htmlFor="login">se connecter:</label>

        <input type="submit" value="Submit" />
      </form>
      <p>{password}</p>
      <p>{username}</p>
    </>
  );
}
export default LoginFormula;
