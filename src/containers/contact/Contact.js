import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace with your Formspree form ID after creating account
      const formspreeEndpoint = "https://formspree.io/f/xvglbwrl";

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError(
        "Failed to send message. Please try again or email me directly."
      );
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-form-container">
            <div className="contact-form-section">
              {submitted && (
                <div className="success-message">
                  <span role="img" aria-label="Success">
                    ✅
                  </span>{" "}
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="error-message">
                  <span role="img" aria-label="Error">
                    ❌
                  </span>{" "}
                  {error}
                  <br />
                  <a
                    href={`mailto:${contactInfo.email_address}`}
                    style={{ color: "#007bff" }}
                  >
                    Click here to email me directly
                  </a>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="6"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="quick-contact-info">
              <div className="quick-contact-item">
                <span className="contact-icon">
                  <span role="img" aria-label="Email">
                    📧
                  </span>
                </span>
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className="quick-link"
                >
                  {contactInfo.email_address}
                </a>
              </div>

              <div className="quick-contact-item">
                <span className="contact-icon">
                  <span role="img" aria-label="Phone">
                    📞
                  </span>
                </span>
                <a href={`tel:${contactInfo.number}`} className="quick-link">
                  {contactInfo.number}
                </a>
              </div>

              <div className="social-links">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Contact Illustration"
            src={require("../../assets/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
