import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopulationList extends Component {

  renderPopulation(populationData) {
    console.log('Population Data: ', populationData);
    const pop = populationData;
    return (
      <div>
        <p>{pop.total_population[0].date}</p>
      </div>
    );

  }

  render() {
    return (
      <div>
        {this.props.population.map(this.renderPopulation)}
      </div>
    );
  }
}

function mapStateToProps({ population }) {
  return { population };
}

export default connect(mapStateToProps)(PopulationList);
