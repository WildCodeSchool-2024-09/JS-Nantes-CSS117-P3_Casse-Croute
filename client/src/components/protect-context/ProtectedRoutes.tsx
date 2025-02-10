import { type ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../pages/context/AuthProvider";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.warn("Vous n'êtes pas connecté !");
    }
  }, [isLogged, navigate]);

  return isLogged && children;
}
export default ProtectedRoutes;
