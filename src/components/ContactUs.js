import React, { useState } from "react";
import "../Styles/ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-card">
              <h2 className="text-center mb-4">Contact Us</h2>
              <p className="text-center mb-4">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>

              <div className="contact-info mt-5">
                <h3 className="text-center mb-4">Other Ways to Connect</h3>
                <div className="row text-center">
                  <div className="col-md-4">
                    <i className="fas fa-phone-alt mb-2"></i>
                    <p>+91983493849</p>
                  </div>
                  <div className="col-md-4">
                    <i className="fas fa-envelope mb-2"></i>
                    <p>info@rozgaarnow.com</p>
                  </div>
                  <div className="col-md-4">
                    <i className="fas fa-map-marker-alt mb-2"></i>
                    <p>Mathura, Krishna Nagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
