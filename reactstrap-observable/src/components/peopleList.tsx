import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPeople } from '../model/resources';
import {
  getPeoplePageData,
  getPeoplePagesCount,
  IAppState
} from '../store';
import { IRessourcesListProps, ResourceList } from './resourcesList';

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


interface IPeopleListOwnProps {
  pageNumber: number
}

const mapStateToProps = (state: IAppState, { pageNumber }: IPeopleListOwnProps): IRessourcesListProps<IPeople> => {
  const people = getPeoplePageData(state, pageNumber);
  const pagesCount = getPeoplePagesCount(state);
  return {
    items: people.sort((people1, people2) => people1.name < people2.name ? -1 : 1),
    pageNumber,
    pagesCount,
    renderItem: (someone: IPeople) => <Item people={someone} />
  };
}

export const PeopleList = connect(
  mapStateToProps
)(ResourceList);
