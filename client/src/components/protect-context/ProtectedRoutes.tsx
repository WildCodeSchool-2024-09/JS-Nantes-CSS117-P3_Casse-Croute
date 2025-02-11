import { type ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../pages/context/useAuth";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const { isLogged } = useAuth();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  });

  return isLogged ? children : null;
}
export default ProtectedRoutes;
