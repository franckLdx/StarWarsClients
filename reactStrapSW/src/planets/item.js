import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchPlanets } from "../data/actions";
import { FilmsList, PeopleList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';

export class Item extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlanets());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      <Panel key={this.props.planet.id} header={this.props.planet.name} >
        <ul>
          <li>Diameter: {this.props.planet.diameter}</li>
          <li>Rotation: {this.props.planet.rotation_period}</li>
          <li>Orbital rotation: {this.props.planet.orbital_period}</li>
          <li>Gravity: {this.props.planet.gravity}</li>
          <li>Population: {this.props.planet.population}</li>
          <li>Surface water: {this.props.planet.surface_water}</li>
        </ul>
        <Tabs id='PlanetTabs' className='DetailsContainer' defaultActiveKey={1}>
          {<Tab eventKey={1} title="Films">{this.getFilms()}</Tab>}
          {<Tab eventKey={2} title="Residents">{this.getRedisents()}</Tab>}
        </Tabs>
      </Panel>
    );
  }

  getFilms() {
    return <FilmsList
      className = 'Planet-GridList'
      list = { this.props.planet.films }
    />;
  }

  getRedisents() {
    return <PeopleList
      className = 'Planet-GridList'
      list = { this.props.planet.residents }
    />;
  }

}

export default connect(
  ({planets}, {match}) => {
    const planet = planets.data ? planets.data.find(planet => planet.id.toString() === match.params.id) : "";
    return {
      state: planets.state,
      planet
    };
  }
)(Item);