// src/pages/CivilPage.js
import React from "react";

const courses = [
  {
    title: "Revit Structure",
    description: "Master Revit for structural design and analysis.",
    imageUrl: "path/to/revit-structure-image.jpg",
  },
  {
    title: "Fusion 360",
    description: "Learn Fusion 360 for 3D CAD, CAM, and CAE.",
    imageUrl: "path/to/fusion-360-image.jpg",
  },
  {
    title: "Structural Engineering",
    description: "Understand the principles of structural engineering.",
    imageUrl: "path/to/structural-engineering-image.jpg",
  },
  {
    title: "AutoCAD",
    description: "Learn the fundamentals of AutoCAD for designing and drafting.",
    imageUrl: "path/to/autocad-image.jpg",
  },
  {
    title: "ETABS",
    description: "Explore ETABS for structural analysis and design.",
    imageUrl: "path/to/etabs-image.jpg",
  },
  {
    title: "Mechanics",
    description: "Delve into the basics of mechanics and material science.",
    imageUrl: "path/to/mechanics-image.jpg",
  },
  {
    title: "Landscape Architecture",
    description: "Learn the art and science of designing outdoor spaces.",
    imageUrl: "path/to/landscape-architecture-image.jpg",
  },
  {
    title: "Construction Management",
    description: "Get insights into managing construction projects efficiently.",
    imageUrl: "path/to/construction-management-image.jpg",
  },
  {
    title: "Building Information Modeling (BIM)",
    description: "Master BIM for integrated project delivery.",
    imageUrl: "path/to/bim-image.jpg",
  },
  {
    title: "SAP2000",
    description: "Learn SAP2000 for advanced structural analysis and design.",
    imageUrl: "path/to/sap2000-image.jpg",
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

const CivilPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Civil Engineering Courses</h1>
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

export default CivilPage;
