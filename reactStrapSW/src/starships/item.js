import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchStarships } from "../data/actions";
import { FilmsList, PeopleList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';

export class Item extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStarships());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      <Panel key={this.props.starship.id} header={this.props.starship.name} >
        <ul>
          <li>Model: {this.props.starship.model}</li>
          <li>Class: {this.props.starship.starship_class}</li>
          <li>Cost: {this.props.starship.cost_in_credits}</li>
          <li>Manufacturer: {this.props.starship.manufacturer}</li>
          <li>Length: {this.props.starship.length}</li>
          <li>Crew: {this.props.starship.crew}</li>
          <li>Passengers: {this.props.starship.passengers}</li>
          <li>Max speed: {this.props.starship.max_atmosphering_speed}</li>
          <li>Hyperdrive rating: {this.props.starship.hyperdrive_rating}</li>
          <li>MGLT: {this.props.starship.MGLT}</li>
          <li>Cargo capacity: {this.props.starship.cargo_capacity}</li>
          <li>Consumables: {this.props.starship.consumables}</li>
        </ul>
        <Tabs id='StarshipTabs' className='DetailsContainer' defaultActiveKey={1}>
          {<Tab eventKey={1} title="Films">{this.getFilms()}</Tab>}
          {<Tab eventKey={2} title="Pilots">{this.getPilots()}</Tab>}
        </Tabs>
      </Panel>
    );
  }

  getFilms() {
    return <FilmsList
      className = 'Starship-GridList'
      list = { this.props.starship.films }
    />;
  }

  getPilots() {
    return <PeopleList
      className = 'Starship-GridList'
      list = { this.props.starship.pilots }
    />;
  }

}

export default connect(
  ({starships}, {match}) => {
    const starship = starships.data ? starships.data.find(starship => starship.id.toString() === match.params.id) : "";
    return {
      state: starships.state,
      starship
    };
  }
)(Item);