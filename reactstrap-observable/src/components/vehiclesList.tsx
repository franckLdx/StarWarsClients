import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IVehicle } from '../model/resources';
import {
  defaultPageNumber,
  getVehiclesPageContent,
  getVehiclesPageCount,
  IAppState
} from '../store';
import { Pages } from './pages';

interface IVehiclesListProps {
  vehiclesList: IVehicle[]
  pagesCount: number | undefined,
};

const List: React.StatelessComponent<IVehiclesListProps> = ({ vehiclesList, pagesCount }) => {
  return (
    <>
      <Pages pagesCount={pagesCount} />
      <Row>
        {vehiclesList.map((vehicle) =>
          <Col key={String(vehicle.name)} lg="4" className="mb-3">
            <Item vehicle={vehicle} />
          </Col>
        )}
      </Row>
    </>
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
  const vehicles = getVehiclesPageContent(state, defaultPageNumber);
  const pagesCount = getVehiclesPageCount(state);
  return {
    pagesCount,
    vehiclesList: vehicles.sort((vehicle1, vehicle2) => vehicle1.name < vehicle2.name ? -1 : 1),
  };
}

export const VehiclesList = connect(
  mapStateToProps,
)(List);
