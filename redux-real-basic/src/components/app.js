import React, { Component } from 'react';
import HeroList from '../containers/hero-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Heroes</h1>
        <HeroList />
      </div>
    );
  }
}
