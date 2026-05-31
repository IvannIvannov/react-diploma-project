import { useAuth } from "../hooks/useAuth";

import "./Certificate.css";

const Certificate = () => {
  const { user } = useAuth();

  const today = new Date().toLocaleDateString("bg-BG");

  return (
    <main className="certificate-page">
      <section className="certificate-card">
        <p className="certificate-label">Certificate of Completion</p>

        <h1>React Learning Platform</h1>

        <span>Този сертификат се присъжда на</span>

        <h2>{user?.name}</h2>

        <p className="certificate-text">
          за успешно завършване на всички React модули и тестове в платформата.
        </p>

        <div className="certificate-footer">
          <div>
            <strong>Дата</strong>
            <span>{today}</span>
          </div>

          <div>
            <strong>ReactLearn</strong>
            <span>Learning Platform</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Certificate;
