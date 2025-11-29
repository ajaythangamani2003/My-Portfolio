import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectsModal from "./ProjectsModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // All project data in one place
  const projects = [
    {
      id: 1,
      title: "Attendance & Spell Management",
      description:
        "A digital attendance tracking system built for college class management.",
      image: "/attendance.png",
      github: "https://github.com/ajaythangamani2003/Attendance-spell.git",
      tech: ["HTML", "Bootstrap", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Fully animated personal portfolio with particles, neon UI & 3D tilt.",
      image: "/portfolio.png",
      github: "https://github.com/ajaythangamani2003",
      tech: ["React", "AOS", "VanillaTilt", "CSS"],
    },
    {
      id: 3,
      title: "Netflix Clone",
      description:
        "Netflix UI clone using React + TMDB API + Firebase Auth.",
      image: "/netflix.png",
      github: "https://github.com/ajaythangamani2003/Netflix-Clone.git",
      tech: ["React", "TMDB API", "Firebase", "Axios"],
    },
  ];

  // 3D Tilt effect
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
      max: 25,
      speed: 500,
      glare: true,
      "max-glare": 0.4,
      perspective: 1000,
      gyroscope: true,
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="projects-ultra">

      <h2 className="projects-title" data-aos="fade-up">
        My Projects 🚀
      </h2>

      <div className="projects-grid">

        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card tilt"
            data-aos="zoom-in"
            onClick={() => openModal(p)}
          >
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <a href={p.github} className="project-btn" target="_blank">
              <i className="fa-brands fa-github"></i> View Code
            </a>
          </div>
        ))}

      </div>

      {/* MODAL */}
      <ProjectsModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
