const Footer = () => {

  // 🔼 Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">

        <h2 className="footer-title">Ajay Portfolio</h2>

        <p className="footer-sub">
          Building minimal, elegant & high-performance web experiences.
        </p>

        {/* NAV LINKS */}
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <a href="https://github.com/ajaythangamani2003" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://linkedin.com/in/ajay-t19" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://x.com/20mt2253" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        {/* 🔼 SCROLL TO TOP BUTTON */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <p className="footer-copy">
          © 2025 Ajay T — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
