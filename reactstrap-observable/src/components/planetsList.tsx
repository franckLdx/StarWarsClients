import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPlanet } from '../model/resources';
import {
  getPlanetsPageContent,
  getPlanetsPageCount,
  IAppState
} from '../store';
import { ResourceList } from './resourcesList';

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

interface IPlanetOwnProps {
  pageNumber: number,
}
const mapStateToProps = (state: IAppState, { pageNumber }: IPlanetOwnProps) => {
  const planets = getPlanetsPageContent(state, pageNumber);
  const pagesCount = getPlanetsPageCount(state);
  return {
    items: planets.sort((planet1, planet2) => planet1.name < planet2.name ? -1 : 1),
    pageNumber,
    pagesCount,
  };
}

const mapDispatchToProps = () => ({
  renderItem: (planet: IPlanet) => <Item planet={planet} />
});

export const PlanetsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList);
