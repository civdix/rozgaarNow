import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 text-white">About LocalHire</h1>
          <p className="lead text-white">
            Connecting Communities with Trusted Service Providers
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mb-5">
            <h2 className="mb-4">Our Mission</h2>
            <p className="lead">
              To bridge the gap between local service providers and community
              members, creating employment opportunities while making essential
              services easily accessible to all.
            </p>
          </div>
        </div>

        <div className="row features mb-5">
          <div className="col-md-4">
            <div className="feature-card">
              <i className="fas fa-handshake mb-3"></i>
              <h3>Trust & Reliability</h3>
              <p>
                All our service providers are verified and reviewed by community
                members.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <i className="fas fa-bolt mb-3"></i>
              <h3>Quick Service</h3>
              <p>
                Get connected with service providers in your area within
                minutes.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <i className="fas fa-shield-alt mb-3"></i>
              <h3>Secure Platform</h3>
              <p>Your safety and security are our top priorities.</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-10 mx-auto">
            <div className="impact-section text-center">
              <h2 className="mb-4">Our Impact</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>1000+</h3>
                    <p>Service Providers</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>5000+</h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>20+</h3>
                    <p>Service Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-10 mx-auto">
            <div className="creators-section text-center">
              <h2 className="mb-4">Meet the Creators</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="creator-card">
                    <div className="creator-image">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <h3>Vrinda Sri Gaur</h3>
                    <p>Co-founder & Developer</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="creator-card">
                    <div className="creator-image">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <h3>Shreya Vashishth</h3>
                    <p>Co-founder & Developer</p>
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

export default About;
