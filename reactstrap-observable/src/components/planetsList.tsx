import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPlanet } from '../model/resources';
import { IAppState } from '../store/state';

interface IPlanetsListProps { planetsList: IPlanet[] };

const List: React.StatelessComponent<IPlanetsListProps> = ({ planetsList }) => {
  return (
    <Row>
      {planetsList.map((planet) =>
        <Col key={String(planet.name)} lg="4" className="mb-3">
          <Item planet={planet} />
        </Col>
      )}
    </Row>
  );
}


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


const mapStateToProps = (state: IAppState): IPlanetsListProps => {
  const planets = state.planets.content || [];
  return { planetsList: planets.sort((planet1, planet2) => planet1.name < planet2.name ? -1 : 1) };
}

export const PlanetsList = connect(
  mapStateToProps,
)(List);
