import React from "react";

const courses = [
  {
    title: "Software Testing",
    description: "Learn the fundamentals of software testing including manual and automated testing.",
    imageUrl: "path/to/software-testing-image.jpg",
  },
  {
    title: "Full Stack Java Developer",
    description: "Master both frontend and backend development with Java and related technologies.",
    imageUrl: "path/to/full-stack-java-image.jpg",
  },
  {
    title: "Data Science",
    description: "Dive deep into data analysis, visualization, and machine learning with Python.",
    imageUrl: "path/to/data-science-image.jpg",
  },
  {
    title: "Data Analytics",
    description: "Analyze data to gain insights and support decision-making processes.",
    imageUrl: "path/to/data-analytics-image.jpg",
  },
  {
    title: "Python",
    description: "Learn Python programming from basics to advanced topics.",
    imageUrl: "path/to/python-image.jpg",
  },
  {
    title: "AWS/DevOps",
    description: "Get hands-on experience with AWS cloud services and DevOps practices.",
    imageUrl: "path/to/aws-devops-image.jpg",
  },
  {
    title: "Salesforce",
    description: "Become a Salesforce expert with our comprehensive training program.",
    imageUrl: "path/to/salesforce-image.jpg",
  },
  {
    title: ".Net Developer",
    description: "Build powerful applications using .NET framework and C#.",
    imageUrl: "path/to/dotnet-image.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Learn the principles of user interface and user experience design.",
    imageUrl: "path/to/ui-ux-design-image.jpg",
  },
  {
    title: "AI with ChatGPT",
    description: "Explore artificial intelligence concepts and applications with ChatGPT.",
    imageUrl: "path/to/ai-chatgpt-image.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Master digital marketing strategies including SEO, SEM, and social media marketing.",
    imageUrl: "path/to/digital-marketing-image.jpg",
  },
  {
    title: "Web Designing",
    description: "Design and develop visually appealing and user-friendly websites.",
    imageUrl: "path/to/web-designing-image.jpg",
  },
];

const sendEnquiry = (course) => {
  alert(`Enquiry sent for: ${course.title}\nDescription: ${course.description}`);
};

const CourseCard = ({ title, description, imageUrl, onEnquiry }) => (
  <div style={cardStyle}>
    <h3>{title}</h3>
    <img src={imageUrl} alt={title} style={imageStyle} />
    <p>{description}</p>
    <button onClick={onEnquiry} style={buttonStyle}>
      Send Enquiry
    </button>
  </div>
);

const ComputerSciencePage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={title}>Computer Science Courses</h1>
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
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const title= {
    textAlign:'center'
};

const cardStyle = {
  width: "300px",
  margin: "20px",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 20px",
  marginTop: "10px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default ComputerSciencePage;
