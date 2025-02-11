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
