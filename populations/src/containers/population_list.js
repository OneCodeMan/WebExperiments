import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopulationList extends Component {

  renderPopulation(populationData) {
    const date = populationData.total_population[0].date;
    const populationCount = populationData.total_population[0].population;

    return (
      <div key={populationCount}>
      {date}<br />
      {populationCount}
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
