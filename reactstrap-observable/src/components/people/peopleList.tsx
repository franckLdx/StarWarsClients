import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPeople } from '../../model/resources';
import {
  getPeopleCurrentPage,
  getPeoplePageData,
  getPeoplePagesCount,
  IAppState
} from '../../store';
import { IRessourcesListProps, ResourceList } from '../resourcesList';

interface IPeopleProps { people: IPeople }

const Item: React.StatelessComponent<IPeopleProps> = ({ people }) =>
  <Card className="bg-light">
    <CardHeader>{people.name}</CardHeader>
    <CardBody >
      <CardText>Gender: {people.gender}</CardText>
      <CardText>Birth: {people.birthYear}</CardText>
      <CardText>Height: {people.height}</CardText>
      <CardText>Mass: {people.mass}</CardText>
      <CardText>Skin color: {people.skinColor}</CardText>
      <CardText>Hair color: {people.hairColor}</CardText>
      <CardText>Eye color: {people.eyeColor}</CardText>
    </CardBody>
  </Card >


const mapStateToProps = (state: IAppState): IRessourcesListProps<IPeople> => {
  const currentPage = getPeopleCurrentPage(state);
  return {
    items: getPeoplePageData(state, currentPage),
    pageNumber: currentPage,
    pagesCount: getPeoplePagesCount(state),
    renderItem: (someone: IPeople) => <Item people={someone} />
  };
}

export const PeopleList = connect(
  mapStateToProps
)(ResourceList);
