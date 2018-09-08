import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IFilm } from '../model/resources';
import { getFilmPagesCount, getFilmsPageData } from '../store/resources/selectors';
import { IAppState } from '../store/state';
import { IRessourcesListProps, ResourceList } from './resourcesList';

interface IFilmProps { film: IFilm }

const Item: React.StatelessComponent<IFilmProps> = ({ film }) =>
  <Card className="bg-light">
    <CardHeader>{`${film.episodeId} - ${film.title}`}</CardHeader>
    <CardBody>
      <CardText>{film.openingCrawl}</CardText>
    </CardBody>
  </Card>


interface IFilmsListOwnProps {
  pageNumber: number,
}

const mapStateToProps = (state: IAppState, { pageNumber }: IFilmsListOwnProps): IRessourcesListProps<IFilm> => {
  return {
    items: getFilmsPageData(state, pageNumber),
    pageNumber,
    pagesCount: getFilmPagesCount(state),
    renderItem: (film: IFilm) => <Item film={film} />
  };
}


export const FilmList = connect(
  mapStateToProps
)(ResourceList);