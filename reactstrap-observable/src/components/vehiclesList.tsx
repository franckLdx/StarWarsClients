import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IVehicle } from '../model/resources';
import { IAppState } from '../store/state';

interface IVehiclesListProps { vehiclesList: IVehicle[] };

const List: React.StatelessComponent<IVehiclesListProps> = ({ vehiclesList }) => {
  return (
    <Row>
      {vehiclesList.map((vehicle) =>
        <Col key={String(vehicle.name)} lg="4" className="mb-3">
          <Item vehicle={vehicle} />
        </Col>
      )}
    </Row>
  );
}


interface IVehicleProps { vehicle: IVehicle }

const Item: React.StatelessComponent<IVehicleProps> = ({ vehicle }) =>
  <Card className="bg-light">
    <CardHeader>{vehicle.name}</CardHeader>
    <CardBody >
      <CardText>Passengers: {vehicle.passengers}</CardText>
      <CardText>Model: {vehicle.model}</CardText>
      <CardText>Crew: {vehicle.crew}</CardText>
      <CardText>Vehicle class: {vehicle.vehicle_class}</CardText>
      <CardText>Manufacturer: {vehicle.manufacturer}</CardText>
      <CardText>Cargo capacity: {vehicle.cargoCapacity}</CardText>
      <CardText>Consumables: {vehicle.consumables}</CardText>
      <CardText>Length: {vehicle.length}</CardText>
      <CardText>Max atmosphering speed: {vehicle.max_atmosphering_speed}</CardText>
      <CardText>Cost in credits: {vehicle.cost_in_credits}</CardText>
    </CardBody>
  </Card >


const mapStateToProps = (state: IAppState): IVehiclesListProps => {
  const vehicles = state.vehicles.content || [];
  return { vehiclesList: vehicles.sort((vehicle1, vehicle2) => vehicle1.name < vehicle2.name ? -1 : 1) };
}

export const VehiclesList = connect(
  mapStateToProps,
)(List);
