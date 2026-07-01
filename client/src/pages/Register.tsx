import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await registerUser({
      name: "User",
      email,
      password,
    });

    if (result.message || result.user) {
      setShowVerificationMessage(true);
    } else {
      alert(result.error || "Регистрацията е неуспешна");
    }
  };

  if (showVerificationMessage) {
    return (
      <main className="register-page">
        <section className="register-card verification-card">
          <div className="verification-icon">📧</div>

          <h1>Провери своя имейл</h1>

          <p className="verification-text">
            Почти готово!
            <br />
            Изпратихме имейл за потвърждение на:
          </p>

          <strong className="verification-email">{email}</strong>

          <div className="verification-info">
            <p>✅ Отвори своята електронна поща.</p>
            <p>✅ Натисни бутона в получения имейл.</p>
            <p>✅ След това можеш да влезеш в ReactLearn.</p>
          </div>

          <div className="verification-warning">
            <strong>Не намираш имейла?</strong>

            <span>
              Провери папките <b>Spam</b> или <b>Junk</b>. Понякога съобщението
              пристига след 1–2 минути.
            </span>
          </div>

          <button
            className="verification-button"
            onClick={() => navigate("/login")}
          >
            Към страницата за вход
          </button>
        </section>
      </main>
    );
  }

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
              required
            />
          </label>

          <label>
            Парола
            <input
              type="password"
              placeholder="Въведи парола"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
