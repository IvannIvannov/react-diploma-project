import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
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
                Начало
              </Link>

              <Link to="/courses" onClick={closeMenu}>
                <HiOutlineBookOpen />
                Курсове
              </Link>

              <Link to="/dashboard" onClick={closeMenu}>
                <HiOutlineSquares2X2 />
                Табло
              </Link>

              <div className="dropdown-divider" />

              {user ? (
                <>
                  <span className="dropdown-user">
                    {user.email} ({user.role})
                  </span>

                  <button className="dropdown-logout" onClick={handleLogout}>
                    <HiOutlineArrowRightOnRectangle />
                    Изход
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMenu}>
                    <HiOutlineUser />
                    Вход
                  </Link>

                  <Link to="/register" onClick={closeMenu}>
                    <HiOutlineUser />
                    Регистрация
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
