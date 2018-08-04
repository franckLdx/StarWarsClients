import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchPeople } from "../data/actions";
import { FilmsList, StarshipsList, VehiclesList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";

export class Item extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPeople());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel  = () =>{
    return (
      <Panel key={this.props.people.id} header={this.props.people.name} >
        <ul>
          <li>Gender: {this.props.people.gender}</li>
          <li>Height: {this.props.people.height}</li>
          <li>Mass: {this.props.people.mass}</li>
          <li>Skin: {this.props.people.skin_color}</li>
          <li>Eye: {this.props.people.eye_color}</li>
          <li>Hair: {this.props.people.hair_color}</li>
          <li>Birth year: {this.props.people.birth_year}</li>
          <li>{this.getSpecies()}</li>
          <li>{this.getHomeWorld()}</li>
        </ul>
        <Tabs id='PeopleTabs' className='DetailsContainer' defaultActiveKey={1}>
          <Tab eventKey={1} title="Films">{this.getFilms()}</Tab>
          <Tab eventKey={2} title="Starships">{this.getStarships()}</Tab>
          <Tab eventKey={3} title="Vehicles">{this.getVehicles()}</Tab>
        </Tabs>
      </Panel>
    );
  }

  getSpecies() {
    const Link = ({s}) => (
      <LinkContainer key={s.id} to={`/species/${s.id}`}>
        <a>{s.name}</a>
      </LinkContainer>
    );

    switch (this.props.people.species.length) {
      case 0:
        return <span>Specie:</span>;
      case 1:
        return <span>Specie: <Link s={this.props.people.species[0]}/></span>;
      default:
        return <span>Species: <ul>
          {this.props.people.species.map(s => <li><Link s={s}/></li>)}
        </ul></span>;
    }
  }

  getHomeWorld() {
    return (
      <span>Home world: <LinkContainer key={this.props.people.homeworld.id} to={`/planets/${this.props.people.homeworld.id}`}>
          <a>{this.props.people.homeworld.name}</a>
        </LinkContainer>
      </span>
    );
  }

  getFilms() {
    return <FilmsList
      className = 'People-GridList'
      list = { this.props.people.films }
    />;
  }

  getStarships() {
    return <StarshipsList
      className = 'People-GridList'
      list = { this.props.people.starships }
    />;
  }

  getVehicles() {
    return <VehiclesList
      className = 'People-GridList'
      list = { this.props.people.vehicles }
    />;
  }

}

export default connect(
  (state, {match}) => {
    const people = state.people.data ? state.people.data.find(people => people.id.toString() === match.params.id) : "";
    return {
      state: state.people.state,
      people
    };
  }
)(Item);