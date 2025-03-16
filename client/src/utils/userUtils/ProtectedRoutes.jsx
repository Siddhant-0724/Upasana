import { Navigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const token = user?.token; // Safely access token
  
  return token ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;

