import React, { Component } from 'react';

const Intro = () => {
  return (
    <div class="intro-div">
      <h1 className="app-title">Venting</h1>
      <div>
        <h3>Type your feelings out!</h3>
        <h4>Tips:</h4>
        <p>
          Type any of these before a sentence to enhance your words:
          <ul>
            <li className="emotion-example">angry:</li>
            <li className="emotion-example">sad:</li>
            <li className="emotion-example">hungry:</li>
            <li className="emotion-example">tired:</li>
            <li className="emotion-example">sleepy:</li>
            <li className="emotion-example">happy:</li>
            <li className="emotion-example">excited:</li>
          </ul>

          Example -> <span className="emotion-example">angry: i am really angry with myself</span>

        </p>
      </div>
    </div>
  );
};

export default Intro;
