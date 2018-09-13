import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IFilm } from '../../model/resources';
import { getFilmCurrentPage, getFilmPagesCount, getFilmsPageData } from '../../store/resources/selectors';
import { IAppState } from '../../store/state';
import { IRessourcesListProps, ResourceList } from '../resourcesList';

interface IFilmProps { film: IFilm }

const Item: React.StatelessComponent<IFilmProps> = ({ film }) =>
  <Card className="bg-light">
    <CardHeader>
      <Link to='/films/record'>{`${film.episodeId} - ${film.title}`}</Link>
    </CardHeader>
    <CardBody>
      <CardText>{film.openingCrawl}</CardText>
    </CardBody>
  </Card>


const mapStateToProps = (state: IAppState): IRessourcesListProps<IFilm> => {
  const currentPage = getFilmCurrentPage(state);
  return {
    items: getFilmsPageData(state, currentPage),
    pageNumber: currentPage,
    pagesCount: getFilmPagesCount(state),
    renderItem: (film: IFilm) => <Item film={film} />
  };
}

export const FilmList = connect(
  mapStateToProps
)(ResourceList);