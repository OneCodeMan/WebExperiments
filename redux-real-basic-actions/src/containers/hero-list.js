import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHero } from '../actions/index';
import { bindActionCreators } from 'redux';

class HeroList extends Component {
  renderList() {
    return this.props.heroes.map((hero, i) => {
      return (
        <li
          key={i}
          onClick={() => this.props.selectHero(hero)}>
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

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectHero: selectHero }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
