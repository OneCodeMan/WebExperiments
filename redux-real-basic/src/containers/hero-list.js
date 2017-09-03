import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroList extends Component {
  renderList() {
    return this.props.heroes.map((hero, i) => {
      return (
        <li key={i}>
          <h1>{hero.name}</h1>
          <h2>{hero.nickname}</h2>
          <p>{hero.quirk}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {

  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps)(HeroList);
