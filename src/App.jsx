import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  /* ---------- PRELOADER ---------- */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- SCROLL PROGRESS BAR ---------- */
  useEffect(() => {
    const updateScroll = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setScroll((scrolled / height) * 100);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  /* ---------- ACTIVE NAV SECTION DETECTION (FULL FIX) ---------- */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const detectSection = () => {
      let current = "hero";
      const screenMiddle = window.innerHeight / 2;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= screenMiddle && rect.bottom >= screenMiddle) {
          current = sec.id;
        }
      });

      setActiveSection(current);
    };

    /** 
     * FIX 1: Run after preloader disappears + DOM mounted 
     * React doesn't guarantee DOM ready before first useEffect
     */
    const delay = setTimeout(() => {
      detectSection();
    }, 300);

    /* FIX 2: Detect on scroll */
    window.addEventListener("scroll", detectSection);

    /* FIX 3: IntersectionObserver for smooth updates */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      clearTimeout(delay);
      window.removeEventListener("scroll", detectSection);
      observer.disconnect();
    };
  }, [loading]); // <--- IMPORTANT FIX!

  if (loading) return <Preloader />;

  return (
    <>
      <div className="progress" style={{ width: `${scroll}%` }}></div>

      <Navbar activeSection={activeSection} />

      <main className="mt-5 pt-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
