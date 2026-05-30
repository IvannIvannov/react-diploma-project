import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../services/authService";

import "./Login.css";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await loginUser({
      email,
      password,
    });

    if (result.token && result.user) {
      setError("");

      localStorage.setItem("token", result.token);

      login(
        result.user.id,
        result.user.name,
        result.user.email,
        result.user.role,
      );

      navigate("/dashboard");
    } else {
      setError(
        result.error || "Невалиден имейл или парола. Моля, опитайте отново.",
      );

      setShakeError(true);

      setTimeout(() => {
        setShakeError(false);
      }, 400);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-header">
          <p>Добре дошъл/ла обратно</p>

          <h1>Вход в профила</h1>

          <span>
            Влез в платформата, за да продължиш обучението си по React.
          </span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
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

          {error && (
            <div className={`auth-error ${shakeError ? "shake" : ""}`}>
              {error}
            </div>
          )}

          <button type="submit">Вход</button>
        </form>

        <p className="login-footer-text">
          Нямате акаунт? <Link to="/register">Регистрирайте се</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
