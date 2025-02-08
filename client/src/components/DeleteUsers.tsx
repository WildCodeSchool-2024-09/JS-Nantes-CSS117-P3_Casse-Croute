import { useNavigate } from "react-router-dom";
import "../styles/delete.users.css";
import type { userData } from "../types/UserData";

interface DeleteUserProps {
  handleVisibility: () => void;
  selectUser: userData;
}

function DeleteUsers({ handleVisibility, selectUser }: DeleteUserProps) {
  const navigation = useNavigate();
  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${selectUser.id}`, {
      method: "DELETE",
      headers: {
        Authorisation: `Baerer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 204) {
        alert("Utilisateur supprimé avec succès 🎉");
        navigation("/dashboard-admin");
      } else if (response.status === 403) {
        alert("Accès refusé : droits insuffisants.");
      } else {
        alert("Erreur lors de la supression");
      }
    });
  };
  return (
    <figure className="container-delete-users">
      <h3>Êtes-vous sûres de vouloir supprimer cette utilisateur?</h3>
      <button onClick={handleClick} type="button">
        Oui
      </button>
      <button onClick={handleVisibility} type="button">
        Non
      </button>
    </figure>
  );
}

export default DeleteUsers;
