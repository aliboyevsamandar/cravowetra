import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleNavLinkClick = () => {
    setNavbarOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link
          to="/"
          className="navbar-brand p-0 d-flex"
          onClick={handleNavLinkClick}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/433/433036.png"
            alt="Logo"
            style={{ width: "60px", height: "55px" }}
          />
          <h1 className="text-primary m-0 ms-2">Restoran</h1>
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "transparent",
            fontSize: "24px",
            color: "white",
          }}
        >
          &#9776; {/* bu 3 chiziqli icon unicode */}
        </button>

        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link
              to="/"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              About
            </Link>
            <Link
              to="/service"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Service
            </Link>
            <Link
              to="/menu"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Menu
            </Link>

            <div className="nav-item dropdown" onMouseLeave={closeDropdown}>
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                Pages
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu show m-0">
                  <Link
                    to="/booking"
                    className="dropdown-item"
                    onClick={handleNavLinkClick}
                  >
                    Booking
                  </Link>
                  <Link
                    to="/team"
                    className="dropdown-item"
                    onClick={handleNavLinkClick}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Contact
            </Link>
          </div>

          <Link
            to="/admin"
            className="btn btn-primary py-2 px-4"
            onClick={handleNavLinkClick}
          >
            Admin
          </Link>
        </div>
      </nav>
    </div>
  );
}
