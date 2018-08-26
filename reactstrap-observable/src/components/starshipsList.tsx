import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IStarship } from '../model/resources';
import { IAppState } from '../store/state';

interface IStarshipsListProps { starshipList: IStarship[] };

const List: React.StatelessComponent<IStarshipsListProps> = ({ starshipList }) => {
  return (
    <Row>
      {starshipList.map((starship) =>
        <Col key={String(starship.name)} lg="4" className="mb-3">
          <Item starship={starship} />
        </Col>
      )}
    </Row>
  );
}


interface IStarshipProps { starship: IStarship }

const Item: React.StatelessComponent<IStarshipProps> = ({ starship }) =>
  <Card className="bg-light">
    <CardHeader>{starship.name}</CardHeader>
    <CardBody >
      <CardText>Model: {starship.model}</CardText>
      <CardText>Starship class: {starship.starshipClass}</CardText>
      <CardText>Passengers: {starship.passengers}</CardText>
      <CardText>Crew: {starship.crew}</CardText>
      <CardText>Length: {starship.length}</CardText>
      <CardText>Manufacturer: {starship.manufacturer}</CardText>
      <CardText>Cargo capacity: {starship.cargoCapacity}</CardText>
      <CardText>Consumables: {starship.consumables}</CardText>
      <CardText>Hyperdrive rating: {starship.hyperdriveRating}</CardText>
      <CardText>Max atmosphering speed: {starship.maxAtmospheringSpeed}</CardText>
      <CardText>mglt: {starship.mglt}</CardText>
      <CardText>Cost in credits: {starship.costInCredits}</CardText>
    </CardBody>
  </Card >


const mapStateToProps = (state: IAppState): IStarshipsListProps => {
  const starships = state.starships.content || [];
  return { starshipList: starships.sort((starship1, starship2) => starship1.name < starship2.name ? -1 : 1) };
}

export const StarshipsList = connect(
  mapStateToProps,
)(List);
