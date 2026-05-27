import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Мария Петрова",
      role: "Начинаещ React курсист",
      text: "Платформата ми помогна да разбера React стъпка по стъпка. Тестовете направиха ученето много по-интересно и полезно.",
    },
    {
      id: 2,
      name: "Иван Георгиев",
      role: "Студент по компютърни науки",
      text: "Много ми хареса изчистената структура на курсовете. Всичко е подредено и удобно за самостоятелно обучение.",
    },
    {
      id: 3,
      name: "Елена Димитрова",
      role: "Frontend ентусиаст",
      text: "Комбинацията от уроци, практика и тестове прави процеса на обучение много по-мотивиращ.",
    },
  ];

  return (
    <main className="home-page">
      <section className="hero-section">
        <div>
          <p className="hero-label">Платформа за самообучение по React</p>

          <h1 className="hero-title">Учи. Практикувай. Създавай.</h1>

          <p className="hero-description">
            Усвои React стъпка по стъпка чрез структурирани курсове,
            интерактивни тестове и практически упражнения, създадени за
            самостоятелно обучение.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="primary-button">
              Разгледай курсовете →
            </Link>

            <Link to="/register" className="secondary-button">
              Създай акаунт
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="hero-card-badge">Основи на React</span>

            <span className="hero-card-progress">72% завършено</span>
          </div>

          <div className="lesson-preview">
            <h3>Текущ модул</h3>

            <p>
              Компоненти, props, state управление и изграждане на преизползваеми
              UI структури.
            </p>

            <div className="lesson-list">
              <div className="lesson-item">
                <span>Компоненти</span>
                <span>✓</span>
              </div>

              <div className="lesson-item">
                <span>Props и State</span>
                <span>✓</span>
              </div>

              <div className="lesson-item">
                <span>Hooks</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <strong>12+</strong>
          <span>React урока</span>
        </div>

        <div className="stat-card">
          <strong>30+</strong>
          <span>Тестови въпроса</span>
        </div>

        <div className="stat-card">
          <strong>100%</strong>
          <span>Самостоятелно обучение</span>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p>Как работи</p>

          <h2>Всичко необходимо за самостоятелно обучение по React.</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span>01</span>

            <h3>Структурирани уроци</h3>

            <p>
              Следвай ясен учебен път от основите на React до по-сложни
              концепции като hooks, routing и управление на state.
            </p>
          </div>

          <div className="feature-card">
            <span>02</span>

            <h3>Практика с тестове</h3>

            <p>
              Провери знанията си след всеки курс и получи незабавна обратна
              връзка.
            </p>
          </div>

          <div className="feature-card">
            <span>03</span>

            <h3>Проследяване на прогреса</h3>

            <p>Учи със собствено темпо и следи развитието си в платформата.</p>
          </div>
        </div>
      </section>

      <section className="learning-path-section">
        <div>
          <p className="hero-label">Учебен път</p>

          <h2>От начинаещ до уверен React разработчик.</h2>

          <p>
            Платформата е създадена да води обучаващите се през най-важните
            React теми стъпка по стъпка.
          </p>
        </div>

        <div className="path-list">
          <div className="path-item">
            <strong>01</strong>
            <span>React Компоненти</span>
          </div>

          <div className="path-item">
            <strong>02</strong>
            <span>Props и State</span>
          </div>

          <div className="path-item">
            <strong>03</strong>
            <span>Hooks</span>
          </div>

          <div className="path-item">
            <strong>04</strong>
            <span>Routing и Автентикация</span>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="section-heading">
          <p>Отзиви</p>

          <h2>Какво казват потребителите за ReactLearn.</h2>
        </div>

        <div className="feedback-grid">
          {feedbacks.map((feedback) => (
            <div className="feedback-card" key={feedback.id}>
              <p className="feedback-text">“{feedback.text}”</p>

              <div className="feedback-author">
                <div className="feedback-avatar">{feedback.name.charAt(0)}</div>

                <div>
                  <strong>{feedback.name}</strong>
                  <span>{feedback.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Готов/а ли си да започнеш с React?</h2>

        <p>
          Създай акаунт, разгледай курсовете и провери знанията си чрез
          интерактивни тестове.
        </p>

        <Link to="/courses" className="primary-button">
          Започни обучението →
        </Link>
      </section>
    </main>
  );
};

export default Home;
