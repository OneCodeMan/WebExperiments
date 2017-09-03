import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroDetail extends Component {
  render() {
    if (!this.props.hero) {
      return <div>Select a hero!</div>
    }

    return (
      <div>
        <h3>Your hero:</h3>
        <p>{this.props.hero.name}</p>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    hero: state.activeHero
  };
}

export default connect(mapStateToProps)(HeroDetail);
