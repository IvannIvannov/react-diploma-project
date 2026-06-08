import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./VerifyEmail.css";

const VerifyEmail = () => {
  const { token } = useParams();

  const hasVerified = useRef(false);

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (hasVerified.current) return;

    hasVerified.current = true;

    const verify = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/verify-email/${token}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Verification failed");
        }

        setSuccess(true);
      } catch {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token]);

  if (loading) {
    return (
      <main className="verify-page">
        <h1>Потвърждаване на имейла...</h1>
      </main>
    );
  }

  return (
    <main className="verify-page">
      {success ? (
        <>
          <h1>✅ Имейлът е потвърден успешно</h1>

          <p>Акаунтът ти вече е активен и можеш да влезеш в платформата.</p>

          <Link to="/login">Към вход</Link>
        </>
      ) : (
        <>
          <h1>❌ Невалиден или вече използван линк</h1>

          <p>Линкът за потвърждение не е валиден или вече е бил използван.</p>

          <Link to="/register">Към регистрация</Link>
        </>
      )}
    </main>
  );
};

export default VerifyEmail;
