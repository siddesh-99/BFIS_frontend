// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div style={footerContainer}>
      <div
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
    </div>
  );
};

export default Footer;

// Inline styles
const footerContainer = {
//   marginTop: "20px",
  backgroundColor: "black",
  padding: "30px 20px",
  color: "#fff",
};
