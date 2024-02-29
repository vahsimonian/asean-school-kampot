import '../App.css';
import React from 'react';

const Contacts = () => {
  const emailAddress = 'khean2011@gmail.com';
  return (
    <div className="contact-page">
      <div className="contacts-titles">
        <h1>Contact Us</h1>
        <p>
          Have questions? Reach out to us via phone, email, or visit our school.
        </p>
      </div>
      {/* Add contact form or information here */}
      <a href={`mailto: ${emailAddress}`} className="send-email">
        Send Email
      </a>
    </div>
  );
};

export default Contacts;
