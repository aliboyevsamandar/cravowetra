import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Back from "./components/Back";
import Footer from "./components/Footer";
import Aboutt from "./pages/Aboutt";
import Booking from "./pages/Booking";
import Contactt from "./pages/Contactt";
import Menuu from "./pages/Menuu";
import Servicee from "./pages/Servicee";
import Teamm from "./pages/Teamm";
import Index from "./pages/Index";
import Login from "./components/Login";
import Admin from "./components/Admin";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isHiddenRoute =
    location.pathname.startsWith("/admin") || location.pathname === "/login";

  return (
    <>
      {!isHiddenRoute && <Navbar />}
      {children}
      {!isHiddenRoute && (
        <>
          <Footer />
          <Back />
        </>
      )}
    </>
  );
}

function AppRoutes() {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));
  const navigate = useNavigate();

  // onLogin funksiyasi: token olingach saqlaydi va admin sahifasiga yo'naltiradi
  const onLogin = () => {
    setToken(localStorage.getItem("adminToken"));
    navigate("/admin");
  };

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<Aboutt />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contactt />} />
      <Route path="/menu" element={<Menuu />} />
      <Route path="/service" element={<Servicee />} />
      <Route path="/team" element={<Teamm />} />
      <Route
        path="/login"
        element={
          !token ? <Login onLogin={onLogin} /> : <Navigate to="/admin" />
        }
      />
      <Route
        path="/admin"
        element={token ? <Admin /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to={token ? "/admin" : "/login"} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <AppRoutes />
      </LayoutWrapper>
    </Router>
  );
}
