import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/LoginImage.png";
import logoImage from "../../assets/Logoimage.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import useAuthStore from "@/store/useAuthStore";
import axios from 'axios';
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber:"",
    email: "",
    password: "",
  });

  const clientUrl = import.meta.env.VITE_SERVER_URL;

  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser); // Zustand action

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password,
      };

      const res = await axios.post(`${clientUrl}/api/user/signup`, userData);

      setUser({
        ...userData,
        token: res.data.token, // Add the token from backend if necessary
      });

      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src={heroImage} alt="Signup" className="w-full h-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft />
        </button>

        <div className="relative z-10 flex flex-col justify-center items-center">
          <img src={logoImage} alt="Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-2xl font-bold mb-6 text-white md:text-black text-center">Sign Up</h1>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
            <div className="flex gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 border border-gray-100 rounded-full bg-orange-50"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-100 shadow-sm  rounded-full bg-orange-50"
                required
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-100  rounded-full bg-orange-50"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="contactNumber"
              placeholder="Contact Number"
              className="w-full p-3 border border-gray-100  rounded-full bg-orange-50"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-100  rounded-full bg-orange-50"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
            >
              Create Account
            </button>
            <p
              onClick={() => navigate("/signin")}
              className="text-blue-500 hover:text-blue-800 cursor-pointer text-center"
            >
              Already have an Account?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;