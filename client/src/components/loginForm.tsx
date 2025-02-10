import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { loginDataTypes } from "../types/LoginData";

export function LoginForm() {
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
        console.warn("Token stored:", data.token);
        toast.success("Connexion réussie !");
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputLogin}
          required // Add required attribute for form validation
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password" // Corrected ID
          name="password"
          onChange={handleInputLogin}
          required // Add required attribute
        />
        <button type="submit" id="login" aria-label="login">
          Se connecter
        </button>
      </form>
    </>
  );
}

export default LoginForm;
