// src/pages/ElectricalPage.js
import React from "react";

const courses = [
  {
    title: "Digital Electronics",
    description: "Learn the fundamentals of digital electronics and logic design.",
    imageUrl: "path/to/digital-electronics-image.jpg",
  },
  {
    title: "Electrical Wiring",
    description: "Understand the principles and practices of electrical wiring.",
    imageUrl: "path/to/electrical-wiring-image.jpg",
  },
  {
    title: "AutoCAD Electrical",
    description: "Master AutoCAD Electrical for electrical design and drafting.",
    imageUrl: "path/to/autocad-electrical-image.jpg",
  },
  {
    title: "Power System Protection",
    description: "Explore the methods and tools for protecting power systems.",
    imageUrl: "path/to/power-system-protection-image.jpg",
  },
  {
    title: "Electrical Transformers",
    description: "Learn about the design and operation of electrical transformers.",
    imageUrl: "path/to/electrical-transformers-image.jpg",
  },
  {
    title: "Solar Energy",
    description: "Understand the basics of solar energy and photovoltaic systems.",
    imageUrl: "path/to/solar-energy-image.jpg",
  },
  {
    title: "DIALux",
    description: "Get hands-on experience with DIALux for lighting design.",
    imageUrl: "path/to/dialux-image.jpg",
  },
];

const sendEnquiry = (course) => {
  alert(`Enquiry sent for: ${course.title}\nDescription: ${course.description}`);
};

const CourseCard = ({ title, description, imageUrl, onEnquiry }) => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>{title}</h3>
    <img src={imageUrl} alt={title} style={imageStyle} />
    <p style={descriptionStyle}>{description}</p>
    <button onClick={onEnquiry} style={buttonStyle}>
      Send Enquiry
    </button>
  </div>
);

const ElectricalPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Electrical Engineering Courses</h1>
      <div style={cardContainerStyle}>
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            onEnquiry={() => sendEnquiry(course)}
          />
        ))}
      </div>
    </div>
  );
};

const pageStyle = {
  padding: "20px",
  backgroundColor: "#f5f5f5",
  fontFamily: "'Roboto', sans-serif",
};

const headerStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "40px",
};

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "1.5em",
  color: "#333",
};

const descriptionStyle = {
  fontSize: "1em",
  color: "#666",
  margin: "10px 0",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 20px",
  fontSize: "1em",
  cursor: "pointer",
  borderRadius: "5px",
  marginTop: "10px",
  transition: "background-color 0.3s ease",
};

buttonStyle[':hover'] = {
  backgroundColor: "#45a049",
};

export default ElectricalPage;
