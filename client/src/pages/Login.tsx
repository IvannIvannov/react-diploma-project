import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login(email);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
