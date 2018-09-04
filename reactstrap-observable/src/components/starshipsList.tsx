import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IStarship } from '../model/resources';
import {
  getStarshipsPageContent,
  getStarshipsPageCount,
  IAppState
} from '../store';
import { Pages } from './pages';

interface IStarshipsListProps {
  starshipList: IStarship[],
  pageNumber: number,
  pagesCount: number | undefined,
};

const List: React.StatelessComponent<IStarshipsListProps> = ({ pagesCount, starshipList }) => {
  return (
    <>
      <Pages pagesCount={pagesCount} />
      <Row>
        {starshipList.map((starship) =>
          <Col key={String(starship.name)} lg="4" className="mb-3">
            <Item starship={starship} />
          </Col>
        )}
      </Row>
    </>
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

interface IStarshipsListOwnProps {
  pageNumber: number,
};

const mapStateToProps = (state: IAppState, { pageNumber }: IStarshipsListOwnProps): IStarshipsListProps => {
  const starships = getStarshipsPageContent(state, pageNumber);
  const pagesCount = getStarshipsPageCount(state);
  return {
    pageNumber,
    pagesCount,
    starshipList: starships.sort((starship1, starship2) => starship1.name < starship2.name ? -1 : 1)
  };
}

export const StarshipsList = connect(
  mapStateToProps,
)(List);
