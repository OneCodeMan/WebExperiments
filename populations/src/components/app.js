import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PopulationList from '../containers/population_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PopulationList />
      </div>
    );
  }
}
