import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      // автоматичен login след регистрация
      login(res.data.token, res.data.user);

      // redirect към dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
