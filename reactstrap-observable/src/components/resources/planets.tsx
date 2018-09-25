import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPlanet } from '../../model/resources';
import {
  getPlanetsPageCount,
  getPlanetsPageData,
  IAppState
} from '../../store';
import { IRessourcesListProps, ResourceList } from '../resourcesList';
import { IListProps } from '../routes';

interface IPlanetProps { planet: IPlanet }

const Item: React.StatelessComponent<IPlanetProps> = ({ planet }) =>
  <Card className="bg-light">
    <CardHeader>{planet.name}</CardHeader>
    <CardBody >
      <CardText>Population: {planet.population}</CardText>
      <CardText>Terrain: {planet.terrain}</CardText>
      <CardText>Surface water: {planet.surfaceWater}</CardText>
      <CardText>Diameter: {planet.diameter}</CardText>
      <CardText>Gravity: {planet.gravity}</CardText>
      <CardText>Climate: {planet.climate}</CardText>
      <CardText>Orbital period: {planet.orbitalPeriod}</CardText>
      <CardText>Rotation period: {planet.rotationPeriod}</CardText>
    </CardBody>
  </Card >

const mapStateToProps = (state: IAppState, { pageNumber }: IListProps): IRessourcesListProps<IPlanet> => {
  const planets = getPlanetsPageData(state, pageNumber);
  const pagesCount = getPlanetsPageCount(state);
  return {
    items: planets,
    pageNumber,
    pagesCount,
    renderItem: (planet: IPlanet) => <Item planet={planet} />
  };
}

export const PlanetsList = connect(
  mapStateToProps
)(ResourceList);
