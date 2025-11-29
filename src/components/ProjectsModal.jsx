// src/components/ProjectsModal.jsx
import React from "react";

const ProjectsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* CLOSE BUTTON */}
        <button className="modal-close" onClick={onClose}>✖</button>

        {/* IMAGE */}
        <img src={project.image} alt={project.title} className="modal-image" />

        {/* TITLE */}
        <h2 className="modal-title">{project.title}</h2>

        {/* DESCRIPTION */}
        <p className="modal-desc">{project.description}</p>

        {/* TECH STACK */}
        <div className="modal-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="modal-buttons">
          {project.demo && (
            <a href={project.demo} target="_blank" className="modal-btn demo">
              🔗 Live Demo
            </a>
          )}

          <a href={project.github} target="_blank" className="modal-btn code">
            <i className="fa-brands fa-github"></i> View Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectsModal;
