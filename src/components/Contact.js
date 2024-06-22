import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="header-section">
        <h1>Get in Touch</h1>
        <p>
          To contact us, please use our contact page or email us with any
          questions or requests for assistance.
        </p>
      </div>
      <div className="contact-section">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>
            Please contact us if you have any questions or need assistance.
            We're here to assist and support you.
          </p>
          <address>
            <p>Shop no.12 Costa Mapal New Osmanpura,</p>
            <p>oppo Govt Engineering College Chhatrapati</p>
            <p>Sambhajinagar (Aurangabad)</p>
            <p>Email: officialbfis@gmail.com</p>
            <p>Phone: 9119555039</p>
          </address>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-number">Contact Number</label>
              <input
                type="text"
                id="contact-number"
                name="contact-number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                required
              />
            </div>
            <button type="submit" className="send-button">
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4461385913156!2d75.3226653!3d19.8675961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99ec966cb687%3A0x49baaff9da396a50!2sBright%20Future%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1623019022960!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
