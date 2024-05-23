import React from 'react';

const About = () => {
  return (
    <div className='about page-container'>
      <h1>About Us</h1>
      <section className='about-content'>
        <p>
          Welcome to the Todo Application! Our mission is to help you boost your productivity by providing a simple and efficient tool for managing your tasks. Whether you're a professional looking to organize your work, a student trying to keep track of assignments, or just someone who wants to stay on top of daily chores, our app is designed to cater to your needs.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2023, the Todo Application was born out of a need for a straightforward and reliable task management tool. We noticed that many existing solutions were either too complex or lacked essential features, so we set out to create an app that strikes the perfect balance between functionality and ease of use.
        </p>
        <h2>Features</h2>
        <ul>
          <li>User-friendly interface</li>
          <li>Task prioritization</li>
          <li>Deadline reminders</li>
          <li>Collaboration tools</li>
          <li>Cross-platform support</li>
        </ul>
        <h2>Our Team</h2>
        <p>
          Our team is composed of passionate developers, designers, and productivity enthusiasts who are dedicated to continuously improving the Todo Application. We believe in the power of simplicity and strive to make our app a seamless part of your daily routine.
        </p>        
      </section>
    </div>
  );
};

export default About;
