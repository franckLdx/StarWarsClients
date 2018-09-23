import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IVehicle } from '../../../model/resources';
import {
  getVehiclesPageCount,
  getVehiclesPageData,
  IAppState
} from '../../../store';
import { IRessourcesListProps, ResourceList } from '../../resourcesList';
import { IListProps } from '../../routes';

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

const mapStateToProps = (state: IAppState, { pageNumber }: IListProps): IRessourcesListProps<IVehicle> => {
  return {
    items: getVehiclesPageData(state, pageNumber),
    pageNumber,
    pagesCount: getVehiclesPageCount(state),
    renderItem: (vehicle: IVehicle) => <Item vehicle={vehicle} />
  };
}

export const VehiclesList = connect(
  mapStateToProps
)(ResourceList);
