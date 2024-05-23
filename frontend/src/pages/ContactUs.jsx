import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact page-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out to us using the information below.</p>

      <div className="contact-methods">
        <div className="contact-method">
          <h2>Email</h2>
          <p>contact@todoapp.com</p>
        </div>
        <div className="contact-method">
          <h2>Phone</h2>
          <p>+1 (234) 567-890</p>
        </div>
        <div className="contact-method">
          <h2>Address</h2>
          <p>123 Productivity Lane,<br />Suite 100,<br />Taskville, TX 75001</p>
        </div>
      </div>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
