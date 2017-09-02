import React from 'react';
import appData from '../../data/data.json'
import Intro from '../Intro';
import Types from '../Types';

const Main = () => (
  <div>

    {appData.fats.map((fat, i) => {
      return (
        <div key={i}>
          <Intro title={fat.main_title} notes={fat.notes} />
          <Types types={fat.types} />
        </div>
      );
    })}

  </div>
);

export default Main;
