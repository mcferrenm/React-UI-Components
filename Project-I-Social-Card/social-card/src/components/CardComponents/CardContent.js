import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <h4>Get Started with React</h4>
      <p className="card-tagline">React makes it painless to create interactive UIs. Design simple views for each state in your application!</p>
      <p className="card-link">reactjs.org</p>
    </div>
  );
};

export default CardContent;