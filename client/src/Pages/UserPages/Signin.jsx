import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/LoginImage.png";
import logoImage from "../../assets/Logoimage.jpg";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import useAuthStore from '../../store/useAuthStore';
import { toast } from "sonner"; // Shadcn toast library

const Signin = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser); // Zustand action

  const clientUrl = import.meta.env.VITE_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${clientUrl}/api/user/signin`, { identifier, password });

      setUser({
        id: response.data.user._id,
        token: response.data.token,
        email: response.data.user.email,
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
        contactNumber: response.data.user.contactNumber,
      });
      
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section for Desktop View */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src={heroImage} alt="Signup" className="w-full h-full" />
      </div>

      {/* Right Section with Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 relative">
        {/* Back Arrow */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft />
        </button>

        {/* Mobile View with Gradient */}
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img src={logoImage} alt="Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-2xl font-bold mb-6 text-white md:text-black text-center">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-4 gap-8 w-full max-w-sm">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full p-3 border border-gray-100 rounded-full bg-orange-50"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-100 rounded-full bg-orange-50"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Login
            </button>
            <p
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:text-blue-800 cursor-pointer text-center"
            >
              Create an Account?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;