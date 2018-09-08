import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IStarship } from '../model/resources';
import {
  getStarshipsPageCount,
  getStarshipsPageData,
  IAppState
} from '../store';
import { IRessourcesListProps, ResourceList } from './resourcesList';

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

const mapStateToProps = (state: IAppState, { pageNumber }: IStarshipsListOwnProps): IRessourcesListProps<IStarship> => {
  const starships = getStarshipsPageData(state, pageNumber);
  const pagesCount = getStarshipsPageCount(state);
  return {
    items: starships.sort((starship1, starship2) => starship1.name < starship2.name ? -1 : 1),
    pageNumber,
    pagesCount,
    renderItem: (starship: IStarship) => <Item starship={starship} />
  };
}

export const StarshipsList = connect(
  mapStateToProps
)(ResourceList);
