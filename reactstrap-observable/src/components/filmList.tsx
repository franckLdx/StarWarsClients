import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IFilm } from '../model/resources';
import { getFilmPagesCount, getFilmsPageContent } from '../store/resources/selectors';
import { IAppState } from '../store/state';
import { Pages } from './pages';

interface IFilmListProps { pagesCount: number | undefined, films: IFilm[] };

const List: React.StatelessComponent<IFilmListProps> = ({ pagesCount, films }) => {
  return <Row>
    <Pages pagesCount={pagesCount} />
    {films.map((film) =>
      <Col key={String(film.episodeId)} lg="4" className="mb-3">
        <Item film={film} />
      </Col>
    )}
  </Row>;
}


interface IFilmProps { film: IFilm }

const Item: React.StatelessComponent<IFilmProps> = ({ film }) =>
  <Card className="bg-light">
    <CardHeader>{`${film.episodeId} - ${film.title}`}</CardHeader>
    <CardBody>
      <CardText>{film.openingCrawl}</CardText>
    </CardBody>
  </Card>


const mapStateToProps = (state: IAppState): IFilmListProps => {
  const films = getFilmsPageContent(state, 0);
  const pagesCount = getFilmPagesCount(state);
  return { pagesCount, films: films.sort((film1, film2) => film1.episodeId - film2.episodeId) };
}

export const FilmList = connect(
  mapStateToProps,
)(List);
