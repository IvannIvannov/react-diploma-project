import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineSquares2X2,
  HiOutlineArrowRightOnRectangle,
  HiOutlineUser,
} from "react-icons/hi2";

import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-spacer" />

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          ReactLearn
        </Link>

        <div className="navbar-menu-wrapper">
          <button
            className="burger-button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          {isOpen && (
            <nav className="dropdown-menu">
              <Link to="/" onClick={closeMenu}>
                <HiOutlineHome />
                Home
              </Link>

              <Link to="/courses" onClick={closeMenu}>
                <HiOutlineBookOpen />
                Courses
              </Link>

              <Link to="/dashboard" onClick={closeMenu}>
                <HiOutlineSquares2X2 />
                Dashboard
              </Link>

              <div className="dropdown-divider" />

              {user ? (
                <>
                  <span className="dropdown-user">
                    {user.email} ({user.role})
                  </span>

                  <button
                    className="dropdown-logout"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    <HiOutlineArrowRightOnRectangle />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMenu}>
                    <HiOutlineUser />
                    Login
                  </Link>

                  <Link to="/register" onClick={closeMenu}>
                    <HiOutlineUser />
                    Register
                  </Link>
                </>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
