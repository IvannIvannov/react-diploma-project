import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2>ReactLearn</h2>

          <p>
            A modern platform for learning React through structured lessons,
            quizzes and self-paced practice.
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 ReactLearn</span>

          <span>Built for independent React learning</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
