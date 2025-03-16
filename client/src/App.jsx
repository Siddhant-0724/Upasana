import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/UserPages/Signup";
import Signin from "./Pages/UserPages/Signin";
// import ProtectedRoute from "./utils/userUtils/ProtectedRoute";
import UserRoute from "./utils/userUtils/UserReSigin"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserRoute><Signup/></UserRoute>} />
        <Route path="/signin" element={<UserRoute><Signin/></UserRoute>} />
      </Routes>
    </>
  );
}

export default App;
