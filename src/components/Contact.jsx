import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import Toast from "./Toast";

const Contact = () => {

  const [sending, setSending] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      createdAt: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "messages"), formData);

      showToastMessage("Message sent successfully! ✔");

      e.target.reset();
    } catch (err) {
      showToastMessage("Failed to send message ❌");
      console.log("Error:", err);
    }

    setSending(false);
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title" data-aos="fade-up">
        Let’s Connect 🤝
      </h2>

      <div className="contact-container" data-aos="zoom-in">

        {/* LEFT CARD */}
        <div className="contact-card">

          <h3>Contact Info</h3>
          <p>Feel free to reach out anytime through email or social media.</p>

          <div className="contact-info">
            <p><i className="fa-solid fa-envelope"></i> ajaythangamani2003@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> +91 9360235147</p>
            <p><i className="fa-solid fa-location-dot"></i> Pudukkottai, Tamil Nadu</p>
          </div>

          <div className="social-icons-contact">
            <a href="https://github.com/ajaythangamani2003" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/ajay-t19" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/20mt2253" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form-box" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>

          <button className="send-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>

      {/* TOAST UI */}
      <Toast 
        message={toastMsg}
        show={showToast}
        onClose={() => setShowToast(false)}
      />

    </section>
  );
};

export default Contact;
