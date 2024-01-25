import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.vaule });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="form-label">Email:</label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="form-label">Subject:</label>
        <input
          className="form-input"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <label className="form-label">Message:</label>
        <textarea
          className="form-textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
