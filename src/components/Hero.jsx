import { useEffect } from "react";
import Typed from "typed.js";
import { startParticles } from "../particle";

const Hero = () => {

  useEffect(() => {
    // Typing Effect
    const typed = new Typed(".typing", {
      strings: ["Java Full-Stack Developer"],
      typeSpeed: 70,
      backSpeed: 45,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  // FIXED PARTICLE INITIALIZATION
  useEffect(() => {
    const timer = setTimeout(() => {
      startParticles();
    }, 300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">

      {/* Particle Canvas */}
      <canvas id="particle-canvas"></canvas>

      {/* Profile Image */}
      <div className="hero-img" data-aos="zoom-in">
        <img src="/ajay.png" alt="Ajay" />
      </div>

      {/* Name */}
      <h1 className="hero-title" data-aos="fade-up">
        Hello, I'm <span className="highlight">Ajay T</span>
      </h1>

      {/* Animated Typing */}
      <p className="typing"></p>

      {/* Social Icons */}
      <div className="social-icons" data-aos="fade-up">
  <a href="https://github.com/ajaythangamani2003" target="_blank">
    <i className="fa-brands fa-github"></i>
  </a>

  <a href="https://linkedin.com/in/ajay-t19" target="_blank">
    <i className="fa-brands fa-linkedin"></i>
  </a>

  {/* 🟦 New Twitter / X icon */}
  <a href="https://x.com/20mt2253" target="_blank">
    <i className="fa-brands fa-x-twitter"></i>
  </a>
</div>


      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="resume-btn"
        data-aos="zoom-in"
      >
        Download Resume&nbsp; <i className="fa-solid fa-download"></i>
      </a>


    </section>
  );
};

export default Hero;
