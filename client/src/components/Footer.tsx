import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="footer-logo-icon">⚛</span>
            <h2>ReactLearn</h2>
          </div>

          <p>
            Модерна платформа за самообучение по React чрез структурирани уроци,
            тестове и практика със собствено темпо.
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 ReactLearn</span>

          <span>Създадено за самостоятелно обучение по React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
