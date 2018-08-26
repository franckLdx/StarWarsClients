import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { ISpecie } from '../model/resources';
import { IAppState } from '../store/state';

interface ISpeciesListProps { speciesList: ISpecie[] };

const List: React.StatelessComponent<ISpeciesListProps> = ({ speciesList }) => {
  return (
    <Row>
      {speciesList.map((species) =>
        <Col key={String(species.name)} lg="4" className="mb-3">
          <Item specie={species} />
        </Col>
      )}
    </Row>
  );
}


interface ISpecieProps { specie: ISpecie }

const Item: React.StatelessComponent<ISpecieProps> = ({ specie }) =>
  <Card className="bg-light">
    <CardHeader>{specie.name}</CardHeader>
    <CardBody >
      <CardText>Classification: {specie.classification}</CardText>
      <CardText>Designation: {specie.designation}</CardText>
      <CardText>language: {specie.language}</CardText>
      <CardText>Average lifespan: {specie.averageLifespan}</CardText>
      <CardText>Average height: {specie.averageHeight}</CardText>
      <CardText>Eye colors: {specie.eyeColors}</CardText>
      <CardText>Hair colors: {specie.hairColors}</CardText>
    </CardBody>
  </Card >


const mapStateToProps = (state: IAppState): ISpeciesListProps => {
  const species = state.species.content || [];
  return { speciesList: species.sort((specie1, specie2) => specie1.name < specie2.name ? -1 : 1) };
}

export const SpeciesList = connect(
  mapStateToProps,
)(List);
