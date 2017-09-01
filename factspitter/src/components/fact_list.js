import React, { Component } from 'react';

const FactList = (props) => {
  return (
    <ul className="col-md-4">
      <li>
        {props.fact}
      </li>
    </ul>
  );
}

export default FactList;
