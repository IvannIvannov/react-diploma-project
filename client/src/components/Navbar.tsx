import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/dashboard">Dashboard</Link>

      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
