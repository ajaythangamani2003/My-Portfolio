import { useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 2500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className={`toast ${show ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
