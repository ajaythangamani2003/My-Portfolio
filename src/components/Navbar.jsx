import { useEffect, useState } from "react";

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <h2 className="logo">MyPortfolio</h2>

      {/* DARK MODE BUTTON */}
      <button className="dark-btn" onClick={toggleDarkMode}>
        {dark ? "☀️" : "🌙"}
      </button>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active-link" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
