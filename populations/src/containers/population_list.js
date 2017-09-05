import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopulationList extends Component {

  renderPopulation(populationData) {
    const date = populationData.total_population[0].date;
    const populationCount = populationData.total_population[0].population;

    return (
      <tr key={populationCount}>
      <td>{date}</td>
      <td>{populationCount}</td>
      </tr>
    );

  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {this.props.population.map(this.renderPopulation)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ population }) {
  return { population };
}

export default connect(mapStateToProps)(PopulationList);
