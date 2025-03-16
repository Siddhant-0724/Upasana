import { Navigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

const UserRoute = ({ children }) => {
    const user = useAuthStore((state) => state.user);
    const token = user?.token; // Safely access token
    
    return token ? <Navigate to="/" /> : children;
};
  export default UserRoute;