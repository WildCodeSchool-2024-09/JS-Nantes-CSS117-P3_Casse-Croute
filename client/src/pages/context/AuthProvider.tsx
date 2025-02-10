import { type ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext<AuthContextType>({ isLogged: false });

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
        toast.error("Connexion expirée. Veuillez vous reconnecter.");
        localStorage.removeItem("jwtToken");
        setIsLogged(false);
      }
    } catch (err) {
      if (isLogged) {
        toast.error("Erreur de connexion au serveur");
        console.error("Erreur serveur :", err);
        setIsLogged(false);
      }
    }
  }

  return (
    <AuthContext.Provider value={{ isLogged }}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
