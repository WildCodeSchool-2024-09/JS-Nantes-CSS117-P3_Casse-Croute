import { type ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AuthContextType } from "../../types/UserData";

const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setIsLogged(false);
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        setIsLogged(true);
      } else if (response.status === 401) {
        setIsLogged(false);
        toast.error("Connexion expirée. Veuillez vous reconnecter.");
      }
    } catch (err) {
      if (isLogged) {
        console.error("Erreur serveur :", err);
        setIsLogged(false);
        toast.error("Erreur de connexion au serveur");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
