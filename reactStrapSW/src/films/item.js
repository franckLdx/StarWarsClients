import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchFilms } from "../data/actions";
import { PeopleList, PlanetsList, StarshipsList, VehiclesList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';

export class Film extends Component {
  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      <Panel key={this.props.film.episode_id} header={`${this.props.film.episode_id} - ${this.props.film.title}`} >
        {this.props.film.opening_crawl}
        <Tabs id='filmsTabs' className='DetailsContainer' defaultActiveKey={1}>
          <Tab eventKey={1} title="People">{this.getPeople()}</Tab>
          <Tab eventKey={2} title="Planets">{this.getPlanets()}</Tab>
          <Tab eventKey={3} title="Starships">{this.getStarships()}</Tab>
          <Tab eventKey={4} title="Vehicles">{this.getVehicles()}</Tab>
        </Tabs>
      </Panel>
    );
  }

  getPeople() {
    return <PeopleList
      className = 'Film-GridList'
      list = { this.props.film.people }
      cast = { item => { return { key: item.id, to: `/people/${item.id}`, data: item.name }; } }
    />;
  }

  getPlanets() {
    return <PlanetsList
      className = 'Film-GridList'
      list = { this.props.film.planets }
    />;
  }

  getStarships() {
    return <StarshipsList
      className = 'Film-GridList'
      list = { this.props.film.starships }
    />
  }

  getVehicles() {
    return <VehiclesList
      className = 'Film-GridList'
      list = { this.props.film.vehicles }
    />
  }

}

export default connect(
  ({films}, {match}) => {
    const film = films.data ? films.data.find(film => film.episode_id.toString() === match.params.id) : "";
    return {
      state: films.state,
      film
    };
  }
)(Film);