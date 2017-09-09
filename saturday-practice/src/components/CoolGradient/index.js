import React from 'react';
import './style.css';

const CoolGradient = ({text}) => {

  return (
    <div className="container">
      <div className="header">
        <div className="box colorful">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );

};

export default CoolGradient;
