import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { userDataTypes } from "../types/UserData";

function CreateAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<userDataTypes>({
    email: "",
    pseudo: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password, passwordConfirm } = userData;
    if (password !== passwordConfirm) {
      toast.error("Les mots de passe ne correspondent pas");
    } else if (!email || !password || !passwordConfirm) {
      toast.error("Veuillez remplir tous les champs");
    } else if (password.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères");
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (response.ok) {
        toast.success("Inscription réussie 👨‍🍳");
        navigate("/view-profile");
      } else if (response.status === 409) {
        toast.error("Email déjà utilisé");
      } else {
        toast.error("Erreur lors de l'inscription 🤦‍♀️");
      }
    }
  }
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputUserData}
          className="generic-input"
        />

        <label htmlFor="password" className="login-label">
          Mot de passe:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputUserData}
          className="generic-input"
        />

        <label htmlFor="passwordConfirm" className="login-label">
          Confirmer le mot de passe:
        </label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleInputUserData}
          className="generic-input"
        />

        <fieldset className="login-fieldset">
          <button
            type="submit"
            id="register"
            aria-label="register"
            className="submit-button"
          >
            S'inscrire
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default CreateAccount;
