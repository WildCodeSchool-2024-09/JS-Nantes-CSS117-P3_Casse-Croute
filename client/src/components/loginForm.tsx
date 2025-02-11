import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../pages/context/useAuth";
import type { LoginFormProps, loginDataTypes } from "../types/LoginData";

export function LoginForm({ toggleForm }: LoginFormProps) {
  const { setIsLogged } = useAuth();
  const [loginData, setLoginData] = useState<loginDataTypes>({});

  const navigate = useNavigate();

  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginData;
    if (!email) {
      // Simplified check
      toast.error("Veuillez entrer votre nom d'utilisateur");
      return; // Stop further execution
    }
    if (!password) {
      // Simplified check
      toast.error("Veuillez entrer votre mot de passe");
      return; // Stop further execution
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from the server
        const errorMessage = errorData.message || "Erreur d'authentification"; // Use server message or default
        toast.error(errorMessage);
        return; // Stop here if there's an error
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("jwtToken", data.token);
        toast.success("Connexion réussie !");
        setIsLogged(true);
        navigate("/view-profile");
      } else {
        toast.error(
          "Email ou mot de passe non-reconnu. Veuillez reessayer ou vous inscrire.",
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Erreur de connexion. Veuillez réessayer plus tard.");
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <form className="container-form-auth" onSubmit={handleSubmit}>
      <h2>Heureux de vous revoir !</h2>
      <section>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="thomas-42@email.fr"
          onChange={handleInputLogin}
          required // Add required attribute for form validation
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password" // Corrected ID
          name="password"
          placeholder="***********"
          onChange={handleInputLogin}
          required // Add required attribute
        />
      </section>
      <section>
        <button type="submit" id="login" aria-label="login">
          Se connecter
        </button>
        <p>Ou</p>
        <button
          type="button"
          id="login"
          aria-label="login"
          onClick={toggleForm}
        >
          Créer un compte
        </button>
      </section>
      <Link to="/" onClick={logout} type="button">
        Deco
      </Link>
    </form>
  );
}

export default LoginForm;
