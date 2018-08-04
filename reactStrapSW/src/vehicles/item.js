import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchVehicles } from "../data/actions";
import { FilmsList, PeopleList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';

export class Item extends Component {
  componentDidMount() {
    this.props.dispatch(fetchVehicles());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      <Panel key={this.props.vehicle.id} header={this.props.vehicle.name} >
        <ul>
          <li>Model: {this.props.vehicle.model}</li>
          <li>Class: {this.props.vehicle.vehicle_class}</li>
          <li>Cost: {this.props.vehicle.cost_in_credits}</li>
          <li>Manufacturer: {this.props.vehicle.manufacturer}</li>
          <li>Length: {this.props.vehicle.length}</li>
          <li>Crew: {this.props.vehicle.crew}</li>
          <li>Passengers: {this.props.vehicle.passengers}</li>
          <li>Max speed: {this.props.vehicle.max_atmosphering_speed}</li>
          <li>Hyperdrive rating: {this.props.vehicle.hyperdrive_rating}</li>
          <li>MGLT: {this.props.vehicle.MGLT}</li>
          <li>Cargo capacity: {this.props.vehicle.cargo_capacity}</li>
          <li>Consumables: {this.props.vehicle.consumables}</li>
        </ul>
        {<Tabs id='vehicleTabs' className='DetailsContainer' defaultActiveKey={1}>
          {<Tab eventKey={1} title="Films">{this.getFilms()}</Tab>}
          {<Tab eventKey={2} title="Pilots">{this.getPilots()}</Tab>}
        </Tabs> }
      </Panel>
    );
  }

  getFilms() {
    return <FilmsList
      className = 'Vehicle-GridList'
      list = { this.props.vehicle.films }
    />;
  }

  getPilots() {
    return <PeopleList
      className = 'Vehicle-GridList'
      list = { this.props.vehicle.pilots }
    />;
  }

}

export default connect(
  ({vehicles}, {match}) => {
    const vehicle = vehicles.data ? vehicles.data.find(vehicle => vehicle.id.toString() === match.params.id) : "";
    return {
      state: vehicles.state,
      vehicle
    };
  }
)(Item);