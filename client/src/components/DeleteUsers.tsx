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
    }).then((response) => {
      if (response.status === 204) {
        alert("Utilisateur supprimé");
        navigation("/dashboard-admin");
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
