import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await registerUser({
      name: "User",
      email,
      password,
    });

    if (result.message || result.user) {
      navigate("/login");
    } else {
      alert(result.error || "Регистрацията е неуспешна");
    }
  };

  return (
    <main className="register-page">
      <section className="register-card">
        <div className="register-header">
          <p>Създай своя профил</p>

          <h1>Регистрация</h1>

          <span>
            Създай акаунт и започни самостоятелното си обучение по React.
          </span>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Имейл адрес
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Парола
            <input
              type="password"
              placeholder="Въведи парола"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit">Създай акаунт</button>
        </form>

        <p className="register-footer-text">
          Вече имаш акаунт? <Link to="/login">Влез оттук</Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
