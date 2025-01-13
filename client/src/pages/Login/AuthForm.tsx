// import CreateAccount from "../../components/CreateAccountForm";
import "./AuthForm.css";
//after discussing with Benjamin, we decided to use the login page as the account creation page
//apres discussion avec benjamin, nous avons decider d'utiliser la page de connexion comme page de creation de compte
function Login() {
  return (
    <>
      <main className="login-container">
        <h2 className="login-subheading">
          Rejoignez la communauté Casse Croûte
        </h2>
        {/* <CreateAccount /> */}
      </main>
    </>
  );
}

export default Login;
