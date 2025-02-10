import CreateAccount from "../../components/CreateAccountForm";
import "./AuthForm.css";
import { useState } from "react";
import LoginForm from "../../components/loginForm";

function AuthForm() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <>
      <main className="login-container">
        <h2 className="login-subheading">
          Rejoignez la communauté Casse Croûte
        </h2>
        <section style={{ display: isLoginFormVisible ? "none" : "block" }}>
          <CreateAccount />
          <button
            type="button"
            id="register"
            aria-label="register"
            className="registerHere"
            onClick={toggleForm}
          >
            Deja un compte ? Se connecter ici
          </button>
        </section>
        <section style={{ display: isLoginFormVisible ? "block" : "none" }}>
          <LoginForm />
          <button
            type="button"
            id="login"
            aria-label="login"
            className="loginHere"
            onClick={toggleForm}
          >
            Pas encore de compte ? S'inscrire ici.
          </button>
        </section>
      </main>
    </>
  );
}

export default AuthForm;
