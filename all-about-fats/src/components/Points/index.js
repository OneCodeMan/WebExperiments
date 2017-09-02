import React from 'react';

const Points = ({points}) => (

    <ul>
      {points.map((point, i) => {
        return (
          <li key={i}>
            {point}
          </li>
        );
      })}

    </ul>

);

export default Points;
