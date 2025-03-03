import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import useGeolocation from "./useGeolocation";

function Services() {
  const [selectedArea, setSelectedArea] = useState("");
  const { latitude, longitude, accuracy, error } = useGeolocation();
  const jobCategories = [
    {
      id: 1,
      title: "Gardener",
      image:
        "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?w=500&h=300&fit=crop",
      description: "Professional garden maintenance and landscaping",
      hourlyRate: "₹200-500",
      skills: ["Landscaping", "Plant Care", "Lawn Maintenance"],
    },
    {
      id: 2,
      title: "Carpenter",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=300&fit=crop",
      description: "Expert woodworking and furniture repairs",
      hourlyRate: "₹300-800",
      skills: ["Furniture Making", "Wood Repair", "Installation"],
    },
    {
      id: 3,
      title: "Electrician",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
      description: "Licensed electrical installation and repairs",
      hourlyRate: "₹400-1000",
      skills: ["Wiring", "Circuit Repair", "Installation"],
    },
    {
      id: 4,
      title: "Plumber",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=300&fit=crop",
      description: "Professional plumbing services and repairs",
      hourlyRate: "₹300-800",
      skills: ["Pipe Repair", "Installation", "Maintenance"],
    },
    {
      id: 5,
      title: "House Cleaner",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
      description: "Thorough home cleaning services",
      hourlyRate: "₹150-400",
      skills: ["Deep Cleaning", "Organization", "Sanitization"],
    },
    {
      id: 6,
      title: "Painter",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=300&fit=crop",
      description: "Professional painting services",
      hourlyRate: "₹200-600",
      skills: ["Interior", "Exterior", "Wall Preparation"],
    },
    {
      id: 7,
      title: "AC Technician",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=300&fit=crop",
      description: "AC repair and maintenance services",
      hourlyRate: "₹400-1000",
      skills: ["Repair", "Installation", "Maintenance"],
    },
    {
      id: 8,
      title: "Mason",
      image:
        "https://images.unsplash.com/photo-1590674899484-13da0d1b0b87?w=500&h=300&fit=crop",
      description: "Professional masonry and construction work",
      hourlyRate: "₹300-700",
      skills: ["Bricklaying", "Concrete Work", "Repairs"],
    },
    {
      id: 9,
      title: "Driver",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop",
      description: "Professional driving services",
      hourlyRate: "₹150-400",
      skills: ["Safe Driving", "Navigation", "Vehicle Maintenance"],
    },
    {
      id: 10,
      title: "Security Guard",
      image:
        "https://images.unsplash.com/photo-1541697467298-16d5a86c0321?w=500&h=300&fit=crop",
      description: "Professional security services",
      hourlyRate: "₹150-400",
      skills: ["Surveillance", "Access Control", "Emergency Response"],
    },
    {
      id: 11,
      title: "Cook",
      image:
        "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?w=500&h=300&fit=crop",
      description: "Professional cooking services",
      hourlyRate: "₹200-600",
      skills: ["Cooking", "Menu Planning", "Food Safety"],
    },
    {
      id: 12,
      title: "Pest Control",
      image:
        "https://images.unsplash.com/photo-1632496164934-8ec71a0a4c90?w=500&h=300&fit=crop",
      description: "Professional pest control services",
      hourlyRate: "₹300-800",
      skills: ["Pest Removal", "Prevention", "Sanitization"],
    },
    {
      id: 13,
      title: "Appliance Repair",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Home appliance repair services",
      hourlyRate: "₹300-800",
      skills: ["Diagnostics", "Repair", "Maintenance"],
    },
    {
      id: 14,
      title: "Tailor",
      image:
        "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=500&h=300&fit=crop",
      description: "Professional tailoring services",
      hourlyRate: "₹200-500",
      skills: ["Stitching", "Alterations", "Design"],
    },
    {
      id: 15,
      title: "Beautician",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
      description: "Professional beauty services",
      hourlyRate: "₹200-800",
      skills: ["Makeup", "Hair Styling", "Skin Care"],
    },
  ];

  return (
    <div className="services-container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row g-4">
        {jobCategories.map((category) => (
          <div key={category.id} className="col-md-4">
            <div className="service-card">
              <div className="service-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="service-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <p>
                  <strong>Hourly Rate:</strong> {category.hourlyRate}
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
