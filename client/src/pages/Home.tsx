import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Maria Petrova",
      role: "Beginner React student",
      text: "The platform helped me understand React step by step. The quizzes made it much easier to check what I actually learned.",
    },
    {
      id: 2,
      name: "Ivan Georgiev",
      role: "Computer science student",
      text: "I liked the clean structure of the courses. It feels simple, focused and useful for independent learning.",
    },
    {
      id: 3,
      name: "Elena Dimitrova",
      role: "Frontend enthusiast",
      text: "The combination of lessons, progress and quizzes makes the learning process much more motivating.",
    },
  ];

  return (
    <main className="home-page">
      <section className="hero-section">
        <div>
          <p className="hero-label">React self-learning platform</p>

          <h1 className="hero-title">Learn. Practice. Build.</h1>

          <p className="hero-description">
            Master React step by step with structured courses, interactive
            quizzes and practical exercises designed for independent learning.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="primary-button">
              Browse Courses →
            </Link>

            <Link to="/register" className="secondary-button">
              Create Account
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="hero-card-badge">React Basics</span>

            <span className="hero-card-progress">72% completed</span>
          </div>

          <div className="lesson-preview">
            <h3>Current module</h3>

            <p>
              Components, props, state management and building reusable UI
              structures.
            </p>

            <div className="lesson-list">
              <div className="lesson-item">
                <span>Components</span>
                <span>✓</span>
              </div>

              <div className="lesson-item">
                <span>Props & State</span>
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
          <span>React lessons</span>
        </div>

        <div className="stat-card">
          <strong>30+</strong>
          <span>Quiz questions</span>
        </div>

        <div className="stat-card">
          <strong>100%</strong>
          <span>Self-paced learning</span>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p>How it works</p>

          <h2>Everything you need to learn React independently.</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span>01</span>

            <h3>Structured lessons</h3>

            <p>
              Follow a clear learning path from React fundamentals to more
              advanced concepts like hooks, routing and state management.
            </p>
          </div>

          <div className="feature-card">
            <span>02</span>

            <h3>Practice with quizzes</h3>

            <p>
              Test your knowledge after each course and get immediate feedback
              based on your answers.
            </p>
          </div>

          <div className="feature-card">
            <span>03</span>

            <h3>Track your progress</h3>

            <p>
              Continue learning at your own pace and monitor your improvement
              throughout the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="learning-path-section">
        <div>
          <p className="hero-label">Learning path</p>

          <h2>From beginner to confident React developer.</h2>

          <p>
            The platform is designed to guide learners through the most
            important React topics step by step.
          </p>
        </div>

        <div className="path-list">
          <div className="path-item">
            <strong>01</strong>
            <span>React Components</span>
          </div>

          <div className="path-item">
            <strong>02</strong>
            <span>Props and State</span>
          </div>

          <div className="path-item">
            <strong>03</strong>
            <span>Hooks</span>
          </div>

          <div className="path-item">
            <strong>04</strong>
            <span>Routing and Authentication</span>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="section-heading">
          <p>Student feedback</p>

          <h2>What learners say about ReactLearn.</h2>
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
        <h2>Ready to start learning React?</h2>

        <p>
          Create an account, explore the courses and test your knowledge with
          interactive quizzes.
        </p>

        <Link to="/courses" className="primary-button">
          Start Learning →
        </Link>
      </section>
    </main>
  );
};

export default Home;
