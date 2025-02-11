import { useState } from "react";
import CreateAccount from "../../components/CreateAccountForm";
import LoginForm from "../../components/loginForm";
import "./auth-form.css";

function AuthForm() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <main>
      <section style={{ display: isLoginFormVisible ? "none" : "block" }}>
        <CreateAccount toggleForm={toggleForm} />
      </section>
      <section style={{ display: isLoginFormVisible ? "block" : "none" }}>
        <LoginForm toggleForm={toggleForm} />
      </section>
    </main>
  );
}

export default AuthForm;
