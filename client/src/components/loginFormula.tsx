function LoginFormula() {
  return (
    <>
      <form>
        <label htmlFor="username">nom d'utilisateur:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">mot de passe:</label>
        <input type="password" id="submit" name="password" />
        <label htmlFor="login">se connecter:</label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default LoginFormula;
