import { type ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../pages/context/AuthProvider";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      toast.warn("Vous n'êtes pas connecté !");
      navigate("/");
    }
  }, [isLogged, navigate]);
  if (!isLogged) {
    return null;
  }

  return isLogged && children;
}
export default ProtectedRoutes;
