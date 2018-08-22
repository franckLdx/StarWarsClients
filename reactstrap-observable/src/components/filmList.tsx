import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IFilm } from '../model/films';
import { IAppState } from '../store/state';

interface IFilmListProps { films: IFilm[] };

const List: React.StatelessComponent<IFilmListProps> = ({ films }) => {
  return <Row>
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


const mapFilmsStateToProps = (state: IAppState): IFilmListProps => {
  const films = state.films.content || [];
  return { films: films.sort((film1, film2) => film1.episodeId - film2.episodeId) };
}

export const FilmList = connect(
  mapFilmsStateToProps,
)(List);
