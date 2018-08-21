import * as React from 'react';
import { connect } from 'react-redux';
import { Card, CardColumns, CardHeader, CardText } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { IFilm } from '../model/films';
import { IAppState } from '../store/state';

interface IFilmListProps { films: IFilm[] };

const List: React.StatelessComponent<IFilmListProps> = ({ films }) => {
  return <CardColumns>
    {films.map((film) => <Item key={String(film.episodeId)} film={film} />)}
  </CardColumns>;
}


interface IFilmProps { film: IFilm }

const Item: React.StatelessComponent<IFilmProps> = ({ film }) => {
  return (
    <Card body={true}>
      <CardHeader>{`${film.episodeId} - ${film.title}`}</CardHeader>
      <CardBody>
        <CardText>{film.openingCrawl}</CardText>
      </CardBody>
    </Card>
  );
}

const mapFilmsStateToProps = (state: IAppState): IFilmListProps => {
  const films = state.films.content || [];
  return { films: films.sort((film1, film2) => film1.episodeId - film2.episodeId) || [] };
}

export const FilmList = connect(
  mapFilmsStateToProps,
)(List);
