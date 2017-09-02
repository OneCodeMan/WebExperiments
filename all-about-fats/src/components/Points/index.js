import React from 'react';

const Points = ({points}) => (

  <div>
    <ul>
      {points.map((point, i) => {
        return (
          <li key={i}>
            {point}
          </li>
        );
      })}

    </ul>
  </div>

);

export default Points;
