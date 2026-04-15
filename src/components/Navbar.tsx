import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "12px" }}>
        Home
      </Link>
      <Link to="/courses" style={{ marginRight: "12px" }}>
        Courses
      </Link>
      <Link to="/login" style={{ marginRight: "12px" }}>
        Login
      </Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
