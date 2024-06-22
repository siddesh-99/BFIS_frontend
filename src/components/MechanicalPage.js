// src/pages/MechanicalPage.js
import React from "react";

const courses = [
  {
    title: "AutoCad",
    description: "Learn the fundamentals of AutoCAD for designing and drafting.",
    imageUrl: "path/to/autocad-image.jpg",
  },
  {
    title: "Catia",
    description: "Master the CATIA software for product design and innovation.",
    imageUrl: "path/to/catia-image.jpg",
  },
  {
    title: "Creo",
    description: "Dive into Creo for 3D CAD parametric feature-based modeling.",
    imageUrl: "path/to/creo-image.jpg",
  },
  {
    title: "Solid Works",
    description: "Learn SolidWorks for solid modeling and CAD design.",
    imageUrl: "path/to/solid-works-image.jpg",
  },
  {
    title: "NX CAD",
    description: "Get hands-on experience with Siemens NX CAD software.",
    imageUrl: "path/to/nx-cad-image.jpg",
  },
  {
    title: "Ansys",
    description: "Explore ANSYS for engineering simulation and 3D design.",
    imageUrl: "path/to/ansys-image.jpg",
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

const MechanicalPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Mechanical Engineering Courses</h1>
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

export default MechanicalPage;
