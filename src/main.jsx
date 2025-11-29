import React from "react";
import { startParticles } from "./particle";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 800, once: false, mirror: true });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
