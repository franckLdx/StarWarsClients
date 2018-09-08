import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { ISpecie } from '../model/resources';
import { getSpeciesPageCount, getSpeciesPageData } from '../store/resources/selectors';
import { IAppState } from '../store/state';
import { IRessourcesListProps, ResourceList } from './resourcesList';

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


interface ISpeciesListOwnProps {
  pageNumber: number
}

const mapStateToProps = (state: IAppState, { pageNumber }: ISpeciesListOwnProps): IRessourcesListProps<ISpecie> => {
  const species = getSpeciesPageData(state, pageNumber);
  const pagesCount = getSpeciesPageCount(state);
  return {
    items: species.sort((specie1, specie2) => specie1.name < specie2.name ? -1 : 1),
    pageNumber,
    pagesCount,
    renderItem: (specie: ISpecie) => <Item specie={specie} />
  };
}

export const SpeciesList = connect(
  mapStateToProps
)(ResourceList);
