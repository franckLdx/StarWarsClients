import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellLinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';
import { fetchPlanets } from "../data/actions";

const Planets = ({planet}) => (
  <CellLinkItem to={`planets/${planet.id}`}>
    {planet.name}
  </CellLinkItem>
);

class PlanetsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlanets());
  }

  render() {
    return contentSelector(this.props.state, this.getList);
  }

  getList = () => {
    return (
      this.props.planets.map(planet => <Planets key={planet.name} planet={planet}/>)
    );
  }
}

const mapStateToProps = ({planets}) => {
  return {
    state: planets.state,
    planets: planets.data
  }
}

export default connect(mapStateToProps)(PlanetsList);