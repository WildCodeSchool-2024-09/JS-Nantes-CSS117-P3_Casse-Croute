import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Custom hook that help to destructure all the sended data through the application
// It prevents TypeScript errors

export default function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  return authContext;
}
