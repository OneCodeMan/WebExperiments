import React from 'react';

const Intro = ({title, notes}) => (

  <div>
    <h1>{title}</h1>
    <ul>
      {notes.map((note, i) => {
        return (
          <li key={i}>{note}</li>
        );
      })}
    </ul>
  </div>

);

export default Intro;
