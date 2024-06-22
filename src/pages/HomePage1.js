// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Canva from "../assets/icons8-canva.svg";
// import AutoCad from "../assets/icons8-autocad-logo.svg";
// import ChatGPT from "../assets/icons8-chatgpt.svg";
// import Html from "../assets/icons8-html.svg";
// import CSS from "../assets/icons8-css.svg";
// import JavaScript from "../assets/javascript-seeklogo.svg";
// import Java from "../assets/java-logo-vector-1.svg";
// import Electric from "../assets/—Pngtree—electrical engineering clipart man dressed_11092665.png";
// import Python from "../assets/python-logo.png";
// import BackgroundImage from "../assets/back_cover_photo.jpg";
// import CivilImage from "../assets/civilImage.png";
// import MechanicalImage from "../assets/MechanicalImage.png";
// import ComputerScienceImage from "../assets/computerScienceImage.jpg";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "../pages/HomePage1.css";

// const Card = ({ title, description, imageUrl }) => {
//   const [hovered, setHovered] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const truncatedDescription =
//     description.length > 100
//       ? description.substring(0, 100) + "..."
//       : description;

//   return (
//     <div
//       style={{ ...cardStyle, ...(hovered && cardHoverStyle) }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <h3>{title}</h3>
//       <img src={imageUrl} alt={title} style={imageStyle} />
//       <p>
//         {isExpanded ? description : truncatedDescription}
//         <button onClick={toggleReadMore} style={readMoreButtonStyle}>
//           {isExpanded ? "Read Less" : "Read More"}
//         </button>
//       </p>
//       <button style={buttonStyle}>Download Brochure</button>
//     </div>
//   );
// };

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const HomePage1 = () => {
//   return (
//     <div>
//       {/* Sticky navigation bar */}
//       {/* Content of the body */}
//       <div
//         style={{
//           ...textContainerStyle,
//           backgroundImage: `url(${BackgroundImage})`,
//         }}
//       >
//         <div style={innerTextContainer}>
//           <h2 style={headerStyle}>ON-DEMAND VIDEO TRAINING</h2>
//           <h2 style={subHeaderStyle}>PAY AFTER PLACEMENT</h2>
//           <p style={contentStyle}>Education: The Key to Success</p>
//           <p style={contentStyle}>
//             E Page Infotech provides comprehensive training for prospective
//             professionals in full-stack Java development
//           </p>
//           <p style={contentStyle}>
//             software testing, data science, and digital marketing through online
//             courses.
//           </p>
//         </div>
//       </div>
//       {/* Content of the card */}
//       <div style={textContainerWrapperStyle}>
//         <h1 style={{ padding: "25px" }}>
//           Bright Future Infotech provides the best online education.
//         </h1>
//       </div>
//       <div style={dividerStyle}></div>
//       <div style={textContainerTitle}>
//         <h1>Our Courses</h1>
//       </div>{" "}
//       {/* Cards */}
//       <div style={cardContainer}>
//         <div>
//           {/* Card 1 */}
//           <Card
//             title="Computer Science"
//             description="A degree in computer science can lead to a career as a system programmer, software developer, web developer, network administrator, software tester, product manager, and engineering manager"
//             imageUrl={ComputerScienceImage}
//           />
//           {/* Card 2 */}
//           <Card
//             title="Electrical"
//             description="Electrical engineering is the field of engineering, concerned with the study, designing, and use of appliances and equipment which use any form of electricity."
//             imageUrl={Electric}
//           />
//         </div>

//         <div style={{marginLeft:'100px'}}>
//           {/* Card 3 */}
//           <Card
//             title="Mechanical"
//             description="Mechanical engineers are routinely responsible for the integration of sensors, controllers, and machinery. Computer technology helps mechanical engineers create and analyze designs, run simulations and test how a machine is likely to work, interact with connected systems, and generate specifications for parts."
//             imageUrl={MechanicalImage}
//           />
//           {/* Card 4 */}
//           <Card
//             title="Civil"
//             description="Civil engineers design, build, and maintain the foundation for our modern society – our buildings, roads and bridges, drinking water and energy systems, sea ports and airports, and the infrastructure for a cleaner environment, to name just a few."
//             imageUrl={CivilImage}
//           />
//         </div>
//       </div>
//       <div style={dividerStyle}></div>
//       <div
//         style={{
//           display: "flex",
//           // alignItems: "center",
//           // backgroundColor: "green",
//           marginLeft: "100px",
//           margin: 50,
//         }}
//       >
//         <div style={{ width: "calc(40% - 10px)" }}>
//           {" "}
//           {/* Adjusted width */}
//           <iframe
//             src="https://www.youtube.com/embed/cMzYYXVrd2E"
//             title="how to add"
//             allowFullScreen
//             style={{
//               borderRadius: "20px", // Border radius
//               height: "360px", // Height
//               width: "100%", // Adjusted width to fill the container
//             }}
//           ></iframe>
//         </div>
//         <div
//           style={{
//             width: "calc(60% - 10px)",
//             // backgroundColor: "red",
//             // paddingLeft:'100px',
//             marginLeft: "50px",
//           }}
//         >
//           {" "}
//           {/* Adjusted width */}
//           <p style={{ marginTop: "80px", fontSize: "22px", width: "75%" }}>
//             Welcome to Bright Future IT Solutions, a premier IT Corporate
//             Training institute dedicated to empowering professionals with
//             cutting-edge skills and knowledge in the ever-evolving field of
//             technology. Our mission is to bridge the gap between industry
//             demands and workforce capabilities, ensuring that our trainees are
//             not only proficient but also industry-ready.
//           </p>
//         </div>
//       </div>
//       <div style={dividerStyle}></div>
//       <div
//         style={{
//           // height: 69,
//           width: "100%",
//           // backgroundColor: "red",
//           margin: "50px",
//         }}
//       >
//         {/* crausel */}
//         <div
//           style={{
//             margin: "50px",
//             marginLeft: "500px",
//             width: "50%",
//             justifyContent: "center",
//             alignContent: "center",
//           }}
//         >
//           <Carousel
//             centerMode={true}
//             swipeable={false}
//             draggable={false}
//             // showDots={true}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             containerClass="carousel-container"
//           >
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={AutoCad}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={ChatGPT}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Canva}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Java}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Python}
//                 style={{ display: "block", width: "100%" }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Html}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={CSS}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={JavaScript}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "160px",
//                   marginTop: "30px",
//                 }}
//               />
//             </div>
//           </Carousel>
//         </div>
//         <div style={dividerStyle}></div>
//         <div style={{ display: "flex", marginLeft: 300 }}>
//           <div style={{ margin: "50px" }}>
//             <h1>Why Choose Us?</h1>
//             <div style={{ width: "500px", marginTop: 20 }}>
//               <p>
//                 Choosing us means receiving access to E Page Infotech’s
//                 high-quality online courses. You may learn vital skills and
//                 boost your career with our extensive curriculum, professional
//                 teachers, hands-on training, user-friendly platform, and
//                 industry-relevant expertise. Join us to expand your knowledge
//                 and keep ahead of the competition in the professional world.
//               </p>
//             </div>
//           </div>
//           <div style={{ margin: "50px" }}>
//             <h3>High-quality online courses</h3>
//             <p style={{ marginBottom: 20, width: "60%" }}>
//               High-quality online courses Online courses of the highest quality
//               for comprehensive learning and skill development.
//             </p>

//             <h3>Learn at Your Own Pace</h3>
//             <p style={{ marginBottom: 20, width: "60%" }}>
//               Discover the flexibility of online learning, where you may gain
//               new skills and information at your own speed.
//             </p>

//             <h3>Professional Certification</h3>
//             <p style={{ marginBottom: 20, width: "60%" }}>
//               Earn professional certification to confirm your talents and
//               further your career in your chosen sector.
//             </p>
//           </div>
//         </div>
//         <div style={dividerStyle}></div>
//         <div style={{ margin: 50, display: "flex", justifyContent: "center" }}>
//           <div style={{ width: "20%", marginRight: "80px" }}>
//             <h4>Get in touch !</h4>
//             <p>
//               Phase 2 ,2d Floor, Mayur Trade Center ,above Vision nx, old
//               Mumbai-Pune Highway, Pimpri Chinchwad 411019
//             </p>
//           </div>
//           <div>
//             <p>Full Stack Java Developer</p>
//             <p>Software Testing</p>
//             <p> Data Science Digital</p>
//             <p> Marketing Privacy Policy</p>
//           </div>

//           <div style={{ marginLeft: "80px" }}>
//             <h3>Contact Info</h3>
//             <p>
//               Phone <br /> 7030860784
//             </p>

//             <h3>Email</h3>
//             <p>epageinfotech@gmail.com</p>
//           </div>
//         </div>
//         <div style={{ marginLeft: 50 }}>
//           <h3 style={{ textAlign: "center" }}>Social Follow</h3>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <a
//               href="https://www.youtube.com/c/jamesqquick"
//               className="youtube social"
//               style={{ marginRight: 10 }}
//             >
//               <FontAwesomeIcon icon={faYoutube} size="2x" />
//             </a>
//             <a
//               href="https://www.facebook.com/learnbuildteach/"
//               className="facebook social"
//               style={{ marginRight: 10 }}
//             >
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </a>
//             <a
//               href="https://www.twitter.com/jamesqquick"
//               className="twitter social"
//               style={{ marginRight: 10 }}
//             >
//               <FontAwesomeIcon icon={faTwitter} size="2x" />
//             </a>
//             <a
//               href="https://www.instagram.com/learnbuildteach"
//               className="instagram social"
//               style={{ marginRight: 10 }}
//             >
//               <FontAwesomeIcon icon={faInstagram} size="2x" />
//             </a>
//           </div>
//         </div>
//         <div style={dividerStyle}></div>
//         <div style={{ marginTop: "20px", textAlign: "center" }}>
//           Copyright © 2024 | Powered by Bright Future Infotech Pvt Ltd
//         </div>
//         <div
//           style={{
//             padding: "50px",
//             marginTop: "20px",
//             backgroundColor: "black",
//           }}
//         ></div>

//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default HomePage1;

// // Inline styles
// const navbarStyle = {
//   overflow: "hidden",
//   backgroundColor: "#333",
//   position: "sticky",
//   top: 0,
//   zIndex: 1000,
// };

// const outerContainerStyle = {
//   height: "100vh", // Adjust as needed
//   overflowY: "auto",
// };

// const textContainerStyle = {
//   backgroundSize: "contain",
// };

// const headerStyle = {
//   color: "white",
//   fontSize: 50,
//   margin: 0,
// };

// const subHeaderStyle = {
//   color: "white",
//   fontSize: 50,
//   margin: "10px 0",
// };

// const contentStyle = {
//   color: "white",
//   fontSize: 20,
//   margin: "10px 0",
// };

// const innerNav = {
//   float: "right",
// };

// const innerTextContainer = {
//   // Contentalig
//   // padding: "20px 0",
//   //   margin: "100px",
//   padding: "200px",
//   marginLeft: 350,
// };

// const cardContainer = {
//   marginBottom: 20,
//   display: "flex",
//   // justifyContent: "space-between",
//   marginLeft:'30%',
//   alignItems: "center",
//   padding: "20px",
// };

// const cardStyle = {
//   width: "250px",
//   marginBottom:'60px',
//   padding: "20px",
//   textAlign: "center",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   borderRadius: "8px",
//   backgroundColor: "#fff",
//   transition: "transform 0.3s, background-color 0.3s",
// };

// const cardHoverStyle = {
//   transform: "scale(1.05)",
//   backgroundColor: "blue",
// };

// // Add hover effect to cards
// cardStyle[":hover"] = {
//   transform: "scale(1.05)",
//   backgroundColor: "blue",
// };

// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
//   marginTop: "10px",
//   transition: "background-color 0.3s",
// };

// const imageStyle = {
//   width: "100%",
//   borderRadius: "8px",
//   marginBottom: "10px",
// };

// const textContainerTitle = {
//   textAlign: "center",
//   marginTop: 30,
//   // backgroundColor: "blue",
//   // width:'75%'
// };

// const textContainerWrapperStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   // height: "100vh",
// };

// const dividerStyle = {
//   width: "75%",
//   height: 2,
//   backgroundColor: "black",
//   margin: " auto",
// };

// const VideoStyle = {
//   margin: "50px",
// };

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const readMoreButtonStyle = {
//   // Your read more button styles
// };

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Canva from "../assets/icons8-canva.svg";
// import AutoCad from "../assets/icons8-autocad-logo.svg";
// import ChatGPT from "../assets/icons8-chatgpt.svg";
// import Html from "../assets/icons8-html.svg";
// import CSS from "../assets/icons8-css.svg";
// import JavaScript from "../assets/javascript-seeklogo.svg";
// import Java from "../assets/java-logo-vector-1.svg";
// import Electric from "../assets/—Pngtree—electrical engineering clipart man dressed_11092665.png";
// import Python from "../assets/python-logo.png";
// import BackgroundImage from "../assets/back_cover_photo.jpg";
// import CivilImage from "../assets/civilImage.png";
// import MechanicalImage from "../assets/MechanicalImage.png";
// import ComputerScienceImage from "../assets/computerScienceImage.jpg";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "../pages/HomePage1.css";

// const Card = ({ title, description, imageUrl }) => {
//   const [hovered, setHovered] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const truncatedDescription =
//     description.length > 100
//       ? description.substring(0, 100) + "..."
//       : description;

//   return (
//     <div
//       style={{ ...cardStyle, ...(hovered && cardHoverStyle) }}

//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <h3>{title}</h3>
//       <img src={imageUrl} alt={title} style={imageStyle} />
//       <p>
//         {isExpanded ? description : truncatedDescription}
//         <button onClick={toggleReadMore} style={readMoreButtonStyle}>
//           {isExpanded ? "Read Less" : "Read More"}
//         </button>
//       </p>
//       <button style={buttonStyle}>Download Brochure</button>
//     </div>
//   );
// };

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const HomePage1 = () => {
//   return (
//     <div>
//       {/* Sticky navigation bar */}
//       {/* Content of the body */}
//       <div
//         style={{
//           ...textContainerStyle,
//           backgroundImage: `url(${BackgroundImage})`,
//         }}
//       >
//         <div style={innerTextContainer}>
//           <h2 style={headerStyle}>ON-DEMAND VIDEO TRAINING</h2>
//           <h2 style={subHeaderStyle}>PAY AFTER PLACEMENT</h2>
//           <p style={contentStyle}>Education: The Key to Success</p>
//           <p style={contentStyle}>
//             E Page Infotech provides comprehensive training for prospective
//             professionals in full-stack Java development
//           </p>
//           <p style={contentStyle}>
//             software testing, data science, and digital marketing through online
//             courses.
//           </p>
//         </div>
//       </div>
//       {/* Content of the card */}
//       <div style={textContainerWrapperStyle}>
//         <h1 style={{ padding: "25px", textAlign: "center" }}>
//           Bright Future Infotech provides the best online education.
//         </h1>
//       </div>
//       <div style={dividerStyle}></div>
//       <div style={textContainerTitle}>
//         <h1>Our Courses</h1>
//       </div>{" "}
//       {/* Cards */}
//       <div style={cardContainer}>
//         <div style={{ display: "flex", flexDirection: "column", marginLeft:'20%' }}>
//           {/* Card 1 */}
//           <Card
//             title="Computer Science"
//             description="A degree in computer science can lead to a career as a system programmer, software developer, web developer, network administrator, software tester, product manager, and engineering manager"
//             imageUrl={ComputerScienceImage}
//           />
//           {/* Card 2 */}
//           <Card
//             title="Electrical"
//             description="Electrical engineering is the field of engineering, concerned with the study, designing, and use of appliances and equipment which use any form of electricity."
//             imageUrl={Electric}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           {/* Card 3 */}
//           <Card
//             title="Mechanical"
//             description="Mechanical engineers are routinely responsible for the integration of sensors, controllers, and machinery. Computer technology helps mechanical engineers create and analyze designs, run simulations and test how a machine is likely to work, interact with connected systems, and generate specifications for parts."
//             imageUrl={MechanicalImage}
//           />
//           {/* Card 4 */}
//           <Card
//             title="Civil"
//             description="Civil engineers design, build, and maintain the foundation for our modern society – our buildings, roads and bridges, drinking water and energy systems, sea ports and airports, and the infrastructure for a cleaner environment, to name just a few."
//             imageUrl={CivilImage}
//           />
//         </div>
//       </div>
//       <div style={dividerStyle}></div>
//       <div
//         style={{
//           display: "flex",
//           margin: "50px",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ width: "40%" }}>
//           <iframe
//             src="https://www.youtube.com/embed/cMzYYXVrd2E"
//             title="how to add"
//             allowFullScreen
//             style={{
//               borderRadius: "20px",
//               height: "360px",
//               width: "100%",
//             }}
//           ></iframe>
//         </div>
//         <div
//           style={{
//             width: "60%",
//             marginLeft: "50px",
//           }}
//         >
//           <p style={{ fontSize: "22px" }}>
//             Welcome to Bright Future IT Solutions, a premier IT Corporate
//             Training institute dedicated to empowering professionals with
//             cutting-edge skills and knowledge in the ever-evolving field of
//             technology. Our mission is to bridge the gap between industry
//             demands and workforce capabilities, ensuring that our trainees are
//             not only proficient but also industry-ready.
//           </p>
//         </div>
//       </div>
//       <div style={dividerStyle}></div>
//       <div
//         style={{ margin: "50px 0", display: "flex", justifyContent: "center" }}
//       >
//         <div style={{ width: "75%" }}>
//           <Carousel
//             centerMode={true}
//             swipeable={false}
//             draggable={false}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             containerClass="carousel-container"
//           >
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={AutoCad}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={ChatGPT}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Canva}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Java}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Python}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={Html}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={CSS}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//             <div style={{ padding: 0, margin: 10 }}>
//               <img
//                 alt="image"
//                 src={JavaScript}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//       {/* Footer */}
//       <div
//         style={{
//           ...footerContainer,
//           padding: "30px 20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             paddingBottom: "20px",
//             marginBottom: "20px",
//             borderBottom: "1px solid #666",
//           }}
//         >
//           <h2 style={{ color: "#fff", margin: 0 }}>Bright Future Infotech</h2>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <a href="#" style={{ color: "#fff", fontSize: "30px" }}>
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//             <a href="#" style={{ color: "#fff", fontSize: "30px" }}>
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//             <a href="#" style={{ color: "#fff", fontSize: "30px" }}>
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//             <a href="#" style={{ color: "#fff", fontSize: "30px" }}>
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//           </div>
//         </div>
//         <p style={{ textAlign: "center", margin: 0, color: "#aaa" }}>
//           © 2023 Bright Future Infotech. All Rights Reserved.
//         </p>

//         <div style={dividerStyle}></div>
//        <div style={{ display: "flex", marginLeft: 300 }}>
//           <div style={{ margin: "50px" }}>
//              <h1>Why Choose Us?</h1>
//              <div style={{ width: "500px", marginTop: 20 }}>
//                <p>
//                  Choosing us means receiving access to E Page Infotech’s
//                  high-quality online courses. You may learn vital skills and
//                  boost your career with our extensive curriculum, professional
//                  teachers, hands-on training, user-friendly platform, and
//                  industry-relevant expertise. Join us to expand your knowledge
//                  and keep ahead of the competition in the professional world.
//                </p>
//              </div>
//            </div>
//            <div style={{ margin: "50px" }}>
//              <h3>High-quality online courses</h3>
//              <p style={{ marginBottom: 20, width: "60%" }}>
//                High-quality online courses Online courses of the highest quality
//                for comprehensive learning and skill development.
//              </p>

//              <h3>Learn at Your Own Pace</h3>
//              <p style={{ marginBottom: 20, width: "60%" }}>
//                Discover the flexibility of online learning, where you may gain
//                new skills and information at your own speed.
//              </p>

//              <h3>Professional Certification</h3>
//              <p style={{ marginBottom: 20, width: "60%" }}>
//                Earn professional certification to confirm your talents and
//                further your career in your chosen sector.
//              </p>
//            </div>
//          </div>
//          <div style={dividerStyle}></div>
//          <div style={{ margin: 50, display: "flex", justifyContent: "center" }}>
//            <div style={{ width: "20%", marginRight: "80px" }}>
//              <h4>Get in touch !</h4>
//              <p>
//                Phase 2 ,2d Floor, Mayur Trade Center ,above Vision nx, old
//                Mumbai-Pune Highway, Pimpri Chinchwad 411019
//              </p>
//            </div>
//            <div>
//              <p>Full Stack Java Developer</p>
//              <p>Software Testing</p>
//              <p> Data Science Digital</p>
//              <p> Marketing Privacy Policy</p>
//            </div>

//            <div style={{ marginLeft: "80px" }}>
//              <h3>Contact Info</h3>
//              <p>
//                Phone <br /> 7030860784
//              </p>

//              <h3>Email</h3>
//              <p>epageinfotech@gmail.com</p>
//            </div>
//          </div>
//          <div style={{ marginLeft: 50 }}>
//            <h3 style={{ textAlign: "center" }}>Social Follow</h3>
//            <div
//              style={{
//                display: "flex",
//                justifyContent: "center",
//                alignItems: "center",
//              }}
//            >
//              <a
//                href="https://www.youtube.com/c/jamesqquick"
//                className="youtube social"
//                style={{ marginRight: 10 }}
//              >
//                <FontAwesomeIcon icon={faYoutube} size="2x" />
//              </a>
//              <a
//                href="https://www.facebook.com/learnbuildteach/"
//                className="facebook social"
//                style={{ marginRight: 10 }}
//              >
//                <FontAwesomeIcon icon={faFacebook} size="2x" />
//              </a>
//              <a
//                href="https://www.twitter.com/jamesqquick"
//                className="twitter social"
//                style={{ marginRight: 10 }}
//             >
//                <FontAwesomeIcon icon={faTwitter} size="2x" />
//              </a>
//              <a
//                href="https://www.instagram.com/learnbuildteach"
//                className="instagram social"
//                style={{ marginRight: 10 }}
//              >
//                <FontAwesomeIcon icon={faInstagram} size="2x" />
//              </a>
//            </div>
//          </div>
//          <div style={dividerStyle}></div>
//          <div style={{ marginTop: "20px", textAlign: "center" }}>
//            Copyright © 2024 | Powered by Bright Future Infotech Pvt Ltd
//          </div>
//          <div
//            style={{
//              padding: "50px",
//              marginTop: "20px",
//              backgroundColor: "black",
//            }}
//          ></div>
//       </div>
//     </div>
//   );
// };

// // Styling variables
// const cardStyle = {
//   // width: "100%", // Full width of the grid column
//   height: "300px",
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
//   transition: "transform 0.2s",
//   width: "50%", // Full width of the grid column
//   height: "70%",
//   marginBottom:'30px'
// };

// const cardContainer = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   // gap: "10px",
//   padding: "20px",
//   display: "flex",
//   // justifyContent: "center",
//   // alignItems: "center",
// };

// const cardHoverStyle = {
//   transform: "translateY(-5px)",
//   boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
// };

// const imageStyle = {
//   width: "100%",
//   height: "auto",
//   marginBottom: "15px",
//   flexGrow: 1,
// };

// const readMoreButtonStyle = {
//   background: "none",
//   color: "blue",
//   border: "none",
//   padding: 0,
//   cursor: "pointer",
//   fontSize: "14px",
// };

// const buttonStyle = {
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   padding: "10px 20px",
//   cursor: "pointer",
//   fontSize: "14px",
//   alignSelf: "flex-start",
// };

// const textContainerStyle = {
//   textAlign: "center",
//   height: "60vh",
//   width: "100%",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const innerTextContainer = {
//   backgroundColor: "rgba(255, 255, 255, 0.7)",
//   padding: "20px",
//   borderRadius: "10px",
//   width: "50%",
// };

// const textContainerWrapperStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "20px 10px",
// };

// const textContainerTitle = {
//   display: "flex",
//   justifyContent: "center",
//   padding: "20px 0",
// };

// const dividerStyle = {
//   height: "2px",
//   backgroundColor: "#007bff",
//   margin: "30px 0",
// };

// const headerStyle = {
//   fontSize: "50px",
//   fontWeight: "bold",
//   color: "#007bff",
//   marginBottom: "20px",
// };

// const subHeaderStyle = {
//   fontSize: "30px",
//   fontWeight: "bold",
//   marginBottom: "20px",
// };

// const contentStyle = {
//   fontSize: "20px",
//   fontWeight: "bold",
//   marginBottom: "10px",
// };

// const footerContainer = {
//   backgroundColor: "#000",
//   color: "#fff",
//   textAlign: "center",
//   padding: "20px",
// };

// export default HomePage1;

import React, { useState } from "react";
import Canva from "../assets/icons8-canva.svg";
import AutoCad from "../assets/icons8-autocad-logo.svg";
import ChatGPT from "../assets/icons8-chatgpt.svg";
import Html from "../assets/icons8-html.svg";
import CSS from "../assets/icons8-css.svg";
import JavaScript from "../assets/javascript-seeklogo.svg";
import Java from "../assets/java-logo-vector-1.svg";
import Electric from "../assets/—Pngtree—electrical engineering clipart man dressed_11092665.png";
import Python from "../assets/python-logo.png";
import BackgroundImage from "../assets/back_cover_photo.jpg";
import CivilImage from "../assets/civilImage.png";
import MechanicalImage from "../assets/MechanicalImage.png";
import ComputerScienceImage from "../assets/computerScienceImage.jpg";
import { useNavigate } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../pages/HomePage1.css";


const Card = ({ title, description, imageUrl,route }) => {
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    navigate(route);
  };

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div
      style={{ ...cardStyle, ...(hovered && cardHoverStyle) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <p>
        {isExpanded ? description : truncatedDescription}
        <button onClick={toggleReadMore} style={readMoreButtonStyle}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={buttonStyle}>View All Courses</button>
      </div>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HomePage1 = () => {
  return (
    <div>
      {/* Sticky navigation bar */}
      {/* Content of the body */}
      <div
        style={{
          ...textContainerStyle,
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div style={innerTextContainer}>
          <h2 style={headerStyle}>ON-DEMAND VIDEO TRAINING</h2>
          <h2 style={subHeaderStyle}>PAY AFTER PLACEMENT</h2>
          <p style={contentStyle}>Education: The Key to Success</p>
          <p style={contentStyle}>
            E Page Infotech provides comprehensive training for prospective
            professionals in full-stack Java development
          </p>
          <p style={contentStyle}>
            software testing, data science, and digital marketing through online
            courses.
          </p>
        </div>
      </div>
      {/* Content of the card */}
      <div style={textContainerWrapperStyle}>
        <h1 style={{ paddingTop: "25px", textAlign: "center" }}>
          Bright Future Infotech provides the best online education.
        </h1>
      </div>
      <div style={dividerStyle}></div>
      <div style={textContainerTitle}>
        <h1>Our Courses</h1>
      </div>{" "}
      {/* Cards */}
      <div style={cardContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20%",
          }}
        >
          {/* Card 1 */}
          <Card
            title="Computer Science"
            description="A degree in computer science can lead to a career as a system programmer, software developer, web developer, network administrator, software tester, product manager, and engineering manager"
            imageUrl={ComputerScienceImage}
            route="/computerScience"
          />
          {/* Card 2 */}
          <Card
            title="Electrical"
            description="Electrical engineering is the field of engineering, concerned with the study, designing, and use of appliances and equipment which use any form of electricity."
            imageUrl={Electric}
            route="/electrical"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Card 3 */}
          <Card
            title="Mechanical"
            description="Mechanical engineers are routinely responsible for the integration of sensors, controllers, and machinery. Computer technology helps mechanical engineers create and analyze designs, run simulations and test how a machine is likely to work, interact with connected systems, and generate specifications for parts."
            imageUrl={MechanicalImage}
            route="/mechanical"
          />
          {/* Card 4 */}
          <Card
            title="Civil"
            description="Civil engineers design, build, and maintain the foundation for our modern society – our buildings, roads and bridges, drinking water and energy systems, sea ports and airports, and the infrastructure for a cleaner environment, to name just a few."
            imageUrl={CivilImage}
            route="/civil"
          />
        </div>
      </div>
      <div style={dividerStyle}></div>
      <div
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <iframe
            src="https://www.youtube.com/embed/cMzYYXVrd2E"
            title="how to add"
            allowFullScreen
            style={{
              borderRadius: "20px",
              height: "360px",
              width: "100%",
            }}
          ></iframe>
        </div>
        <div
          style={{
            width: "60%",
            marginLeft: "50px",
          }}
        >
          <p style={{ fontSize: "22px" }}>
            Welcome to Bright Future IT Solutions, a premier IT Corporate
            Training institute dedicated to empowering professionals with
            cutting-edge skills and knowledge in the ever-evolving field of
            technology. Our mission is to bridge the gap between industry
            demands and workforce capabilities, ensuring that our trainees are
            not only proficient but also industry-ready.
          </p>
        </div>
      </div>
      <div style={dividerStyle}></div>
      <div
        style={{ margin: "50px 0", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "75%" }}>
          <Carousel
            centerMode={true}
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
          >
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={AutoCad}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={ChatGPT}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={Canva}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={Java}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={Python}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={Html}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={CSS}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: 0, margin: 10 }}>
              <img
                alt="image"
                src={JavaScript}
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div style={dividerStyle}></div>
      <div style={{ display: "flex", marginLeft: 370 }}>
        <div style={{ margin: "50px" }}>
          <h1>Why Choose Us?</h1>
          <div style={{ width: "500px", marginTop: 20 }}>
            <p>
              Industry-Relevant Curriculum: Our courses are continually updated
              to reflect the latest trends and technologies in the IT
              industry.Proven Track Record: We have a history of successfully
              training professionals who go on to make significant contributions
              to their organizations.Collaborative Learning Environment: We
              foster a supportive and interactive learning atmosphere that
              encourages knowledge sharing and networking.
            </p>
          </div>
        </div>
        <div style={{ margin: "50px" }}>
          <h3>High-quality online courses</h3>
          <p style={{ marginBottom: 20, width: "60%" }}>
            High-quality online courses Online courses of the highest quality
            for comprehensive learning and skill development.
          </p>

          <h3>Learn at Your Own Pace</h3>
          <p style={{ marginBottom: 20, width: "60%" }}>
            Discover the flexibility of online learning, where you may gain new
            skills and information at your own speed.
          </p>

          <h3>Professional Certification</h3>
          <p style={{ marginBottom: 20, width: "60%" }}>
            Earn professional certification to confirm your talents and further
            your career in your chosen sector.
          </p>
        </div>
      </div>
      <div style={dividerStyle}></div>
      <div style={{ margin: 50, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "20%", marginRight: "80px" }}>
          <h4>Get in touch !</h4>
          <p>
            Shop no.12 Costa Mapal New Osmanpura, oppo Govt Engineering College
            Chhatrapati Sambhajinagar (Aurangabad)
          </p>
        </div>
        <div>
          <p>Full Stack Java Developer</p>
          <p>Software Testing</p>
          <p> Data Science Digital</p>
          <p> Marketing Privacy Policy</p>
        </div>

        <div style={{ marginLeft: "80px" }}>
          <h3>Contact Info</h3>
          <p>
            Phone <br /> 9119555039
          </p>

          <h3>Email</h3>
          <p>officialbfis@gmail.com</p>
        </div>
      </div>
    
      <div
        style={{
          // padding: "50px",
          marginTop: "20px",
          backgroundColor: "black",
        }}
      ></div>
      {/* Footer */}
      {/* <div
        style={{
          ...footerContainer,
          // padding: "30px 20px",
        }}
      > */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "20px",
            marginBottom: "20px",
            borderBottom: "1px solid #666",
          }}
        >
          <h2 style={{ color: "#fff", margin: 0 }}>Bright Future Infotech</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://www.youtube.com/watch?v=cMzYYXVrd2E"
              style={{ color: "#fff", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="http://surl.li/tmdep"
              style={{ color: "#fff", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="http://surl.li/tmdet"
              style={{ color: "#fff", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: 0, color: "#aaa" }}>
          Copyright © 2024 | Powered by Bright Future Infotech Pvt Ltd
        </p>
      </div> */}
    </div>
  );
};

// Styling variables
const cardStyle = {
  height: "300px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  transition: "transform 0.2s",
  width: "50%", 
  height: "70%",
  // width: "calc(50% - 40px)",
  marginBottom: "50px",
};

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  // gap: "10px",
  padding: "20px",
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
};

const cardHoverStyle = {
  transform: "translateY(-20px)",
  boxShadow: "0 16px 18px rgba(0, 0, 255, 0.3)",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  marginBottom: "15px",
  flexGrow: 1,
};

const readMoreButtonStyle = {
  background: "none",
  color: "blue",
  border: "none",
  padding: 0,
  cursor: "pointer",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "14px",
  alignSelf: "center",
};

const textContainerStyle = {
  textAlign: "center",
  height: "60vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const innerTextContainer = {
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  padding: "20px",
  borderRadius: "10px",
  width: "50%",
};

const textContainerWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // padding: "20px 10px",
};

const textContainerTitle = {
  display: "flex",
  justifyContent: "center",
  // padding: "20px 0",
  marginBottom: "30px",
};

const dividerStyle = {
  height: "2px",
  backgroundColor: "#007bff",
  margin: "30px 0",
};

const headerStyle = {
  fontSize: "50px",
  fontWeight: "bold",
  color: "#007bff",
  marginBottom: "20px",
};

const subHeaderStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const contentStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const footerContainer = {
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

export default HomePage1;
