// 

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import ChooseUser from "./pages/ChooseUser";
import HomePage1 from "./pages/HomePage1";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"; // Import Footer component
import Logo from "./assets/TransparentLogo.png";
import ComputerSciencePage from "./components/ComputerSciencePage";
import ElectricalPage from "./components/ElectricalPage";
import MechanicalPage from "./components/MechanicalPage";
import CivilPage from "./components/CivilPage";

const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  const renderDashboard = () => {
    switch (currentRole) {
      case "Admin":
        return <AdminDashboard />;
      case "Student":
        return <StudentDashboard />;
      case "Teacher":
        return <TeacherDashboard />;
      default:
        return (
          <div>
            <div style={navbarStyle}>
              <div style={innerNav}>
                <Link to="/">
                  <img src={Logo} alt="Logo" style={logoStyle} />
                </Link>
                <div style={navLinksContainerStyle}>
                  <Link to="/choose" style={menuItemStyle}>
                    Dashboard
                  </Link>
                  <Link to="/career" style={menuItemStyle}>
                    Career
                  </Link>
                  <Link to="/aboutus" style={menuItemStyle}>
                    About Us
                  </Link>
                  <Link to="/contact" style={menuItemStyle}>
                    Contact
                  </Link>
                  <Link to="/gallery" style={menuItemStyle}>
                    Gallery
                  </Link>
                  <Link to="/" style={menuItemStyle}>
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div style={contentContainerStyle}>
              <Routes>
                <Route path="/" element={<HomePage1 />} />
                <Route path="/choose" element={<ChooseUser visitor="normal" />} />
                <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />
                <Route path="/career" element={<Career />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
                <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
                <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
                <Route path="/Adminregister" element={<AdminRegisterPage />} />
                <Route path="/computerScience" element={<ComputerSciencePage />} />
                <Route path="/electrical" element={<ElectricalPage />} />
                <Route path="/mechanical" element={<MechanicalPage />} />
                <Route path="/civil" element={<CivilPage />} />
              </Routes>
            </div>
            <Footer /> {/* Include Footer here */}
          </div>
        );
    }
  };

  return (
    <Router>
      {renderDashboard()}
    </Router>
  );
};

export default App;

// Inline styles
const navbarStyle = {
  overflow: "hidden",
  backgroundColor: "#0E3386",
  position: "fixed", // Changed from 'sticky' to 'fixed'
  width: "100%", // Take the full width of the viewport
  top: 0,
  zIndex: 1000,
  display: "flex", // Add flexbox
  alignItems: "center", // Center items vertically
  justifyContent: "space-between", // Space between items
  padding: "0 20px", // Add padding to left and right
};

const menuItemStyle = {
  display: "block",
  color: "#f2f2f2",
  textAlign: "center",
  padding: "14px 20px",
  textDecoration: "none",
  fontSize: "18px", // Increase font size
};

const innerNav = {
  display: "flex",
  alignItems: "center",
};

const navLinksContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "40px",
};

const contentContainerStyle = {
  paddingTop: "70px", // Adjust this value according to the height of your navigation bar
};

const logoStyle = {
  height: "70px",
  width: "70px",
  marginLeft: "100px",
};
