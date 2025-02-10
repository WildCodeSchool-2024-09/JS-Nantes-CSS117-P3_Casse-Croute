import { type ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext<AuthContextType>({ isLogged: false });

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/verify`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
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
