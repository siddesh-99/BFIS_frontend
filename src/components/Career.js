// Career.js
import React from 'react';
import './Career.css'; // Create this file for custom styles

const Career = () => {
  const jobOpenings = [
    {
      title: 'Software Engineer',
      location: 'New York, NY',
      description: 'We are looking for a skilled software engineer to join our dynamic team. You will work on a variety of projects and be responsible for the development and maintenance of our software products.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2+ years of experience in software development',
        'Proficiency in JavaScript, React, and Node.js',
        'Strong problem-solving skills',
      ],
    },
    {
      title: 'Product Manager',
      location: 'San Francisco, CA',
      description: 'As a Product Manager, you will be responsible for defining and executing the product strategy. You will work closely with cross-functional teams to deliver products that meet market needs.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '3+ years of experience in product management',
        'Strong leadership and communication skills',
        'Experience with agile methodologies',
      ],
    },
    // Add more job openings as needed
  ];

  return (
    <div className="career-container">
      <header className="career-header">
        <h1>Join Our Team</h1>
      </header>
      
      <section className="career-section">
        <h2>Why Work With Us?</h2>
        <p>
          At Bright Future Infotech, we are committed to creating a positive and inclusive work environment where everyone can thrive. We offer competitive salaries, comprehensive benefits, and opportunities for professional growth.
        </p>
      </section>
      
      <section className="career-section">
        <h2>Current Job Openings</h2>
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-opening">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <h4>Requirements:</h4>
            <ul>
              {job.requirements.map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      <section className="career-section">
        <h2>How to Apply</h2>
        <p>
          If you are interested in any of the positions listed above, please send your resume and cover letter to <a href="mailto:careers@brightfutureinfotech.com">careers@brightfutureinfotech.com</a>. We look forward to hearing from you!
        </p>
      </section>
      
      <footer className="career-footer">
        <p>© 2023 Bright Future Infotech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Career;
