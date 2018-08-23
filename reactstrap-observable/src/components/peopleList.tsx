import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IPeople } from '../model/people';
import { IAppState } from '../store/state';

interface IPeopleListProps { peopleList: IPeople[] };

const List: React.StatelessComponent<IPeopleListProps> = ({ peopleList }) => {
  return (
    <Row>
      {peopleList.map((people) =>
        <Col key={String(people.name)} lg="4" className="mb-3">
          <Item people={people} />
        </Col>
      )}
    </Row>
  );
}


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


const mapStateToProps = (state: IAppState): IPeopleListProps => {
  const people = state.people.content || [];
  return { peopleList: people.sort((people1, people2) => people1.name < people2.name ? -1 : 1) };
}

export const PeopleList = connect(
  mapStateToProps,
)(List);
