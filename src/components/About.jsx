const About = () => {
  return (
    <section id="about" className="about">

      <h2 data-aos="fade-up">About Me</h2>

     <p data-aos="zoom-in">
        I'm Ajay — a <span className="highlight">Java Full-Stack Developer </span> 
        passionate about building modern, efficient and scalable web applications. 
        I enjoy creating <span className="highlight">responsive UIs</span>, integrating 
        <span className="highlight"> REST APIs</span>, and developing full-stack solutions 
        using <span className="highlight">Java, React.js, Node.js, Express.js, and MongoDB</span>.
      </p>



      {/* ⭐ Skills Section */}
      <h3 className="skills-title" data-aos="fade-up">My Skills</h3>

      <div className="skills-wrapper">

  <div className="skill-card">
    <i className="fa-brands fa-html5"></i>
    <span>HTML</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-css3-alt"></i>
    <span>CSS</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-js"></i>
    <span>JavaScript</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-react"></i>
    <span>React</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-java"></i>
    <span>Java</span>
  </div>

  <div className="skill-card">
    <i className="fa-solid fa-database"></i>
    <span>SQL</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-node-js"></i>
    <span>Node.js</span>
  </div>

  <div className="skill-card">
    <i className="fa-solid fa-server"></i>
    <span>Express.js</span>
  </div>

  <div className="skill-card">
    <i className="fa-brands fa-bootstrap"></i>
    <span>Bootstrap</span>
  </div>

  <div className="skill-card">
    <i className="fa-solid fa-leaf"></i>
    <span>MongoDB</span>
  </div>

</div>


    </section>
  );
};

export default About;
