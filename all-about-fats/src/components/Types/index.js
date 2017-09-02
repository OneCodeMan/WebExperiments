import React from 'react';
import Points from '../Points';

const Types = ({types}) => (

  <div>
    <ul>
      {types.map((type, i) => {
        return (
          <li key={i}>
            <h3>{type.title} - {type.quality}</h3>
            <Points points={type.points} />
          </li>
        );
      })}
    </ul>
  </div>

);

export default Types;
