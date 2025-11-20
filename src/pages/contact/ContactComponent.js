import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactInfo } from "../../portfolio.js";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      submitted: false,
      loading: false,
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true, error: "" });

    try {
      // Replace with your Formspree endpoint
      const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID_HERE";

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.formData),
      });

      if (response.ok) {
        this.setState({
          submitted: true,
          formData: { name: "", email: "", subject: "", message: "" },
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      this.setState({
        error: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="contact-main">
        <Header theme={this.props.theme} />
        <div className="basic-contact">
          {/* Hero Section with Image */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Get in Touch</h1>
                  <p>
                    I'd love to hear from you! Whether you're interested in
                    collaboration, job opportunities, or just want to connect,
                    feel free to reach out.
                  </p>
                  <div className="hero-stats">
                    <div className="stat">
                      <span className="stat-number">24h</span>
                      <span className="stat-label">Response Time</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Available</span>
                    </div>
                  </div>
                </div>
                <div className="hero-image">
                  <img
                    src={require("../../assets/images/custom_logos/ai_photo.png")}
                    alt="Bodhi"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* Main Contact Layout */}
          <div className="contact-layout">
            {/* Left Column: Contact Form */}
            <Fade left duration={1000} distance="40px">
              <div className="contact-form-card">
                <div className="form-section-header">
                  <h2>Send a Message</h2>
                  <p>Fill out the form below and I'll get back to you soon</p>
                </div>

                <div className="contact-form-container">
                  {this.state.submitted && (
                    <div className="success-message">
                      ✅ Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {this.state.error && (
                    <div className="error-message">❌ {this.state.error}</div>
                  )}

                  <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        placeholder="Your Name"
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={this.state.formData.email}
                        onChange={this.handleChange}
                        placeholder="Your Email"
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={this.state.formData.subject}
                        onChange={this.handleChange}
                        placeholder="Subject"
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        value={this.state.formData.message}
                        onChange={this.handleChange}
                        placeholder="Your Message"
                        required
                        className="form-textarea"
                        rows="6"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="submit-button-primary"
                      disabled={this.state.loading}
                    >
                      {this.state.loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </Fade>

            {/* Right Column: Contact Information */}
            <Fade right duration={1000} distance="40px">
              <div className="contact-info-card">
                <div className="info-section-header">
                  <h2>Get in Touch</h2>
                  <p>Prefer direct contact? Reach out through these channels</p>
                </div>

                <div className="contact-methods-list">
                  <div className="contact-method email-method">
                    <div className="method-icon">
                      <span
                        role="img"
                        aria-label="Email"
                        className="contact-icon"
                      >
                        📧
                      </span>
                    </div>
                    <div className="method-details">
                      <h3>Email</h3>
                      <a
                        href={`mailto:${contactInfo.email_address}`}
                        className="method-link"
                      >
                        {contactInfo.email_address}
                      </a>
                      <p className="method-description">
                        I usually respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="contact-method phone-method">
                    <div className="method-icon">
                      <span
                        role="img"
                        aria-label="Phone"
                        className="contact-icon"
                      >
                        📞
                      </span>
                    </div>
                    <div className="method-details">
                      <h3>Phone</h3>
                      <a
                        href={`tel:${contactInfo.number}`}
                        className="method-link"
                      >
                        {contactInfo.number}
                      </a>
                      <p className="method-description">
                        Available for calls and WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <span role="img" aria-label="Location">
                        📍
                      </span>
                    </div>
                    <div className="method-details">
                      <h3>Location</h3>
                      <p>Kolkata, India</p>
                      <span className="method-tag">Remote Available</span>
                    </div>
                  </div>

                  <div className="contact-method social-method">
                    <div className="method-icon">
                      <span role="img" aria-label="Social Media">
                        💬
                      </span>
                    </div>
                    <div className="method-details">
                      <h3>Social Media</h3>
                      <div className="social-media-container">
                        <SocialMedia />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ContactComponent;
