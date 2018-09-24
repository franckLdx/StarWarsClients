import * as React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { IFilm } from '../../../model';
import { getFilmById, IAppState } from '../../../store';
import { IRecordProps } from '../../routes';

interface IFilmsRecordCmpProps {
  film: IFilm;
}

const FilmsRecordCmp: React.StatelessComponent<IFilmsRecordCmpProps> =
  ({ film }: IFilmsRecordCmpProps) => {
    if (!film) {
      return null;
    }
    return (<>
      <Alert color="dark">
        <h1>{film.episodeId} - {film.title} ({film.releaseDate})</h1>
        <hr />
        <p>{film.openingCrawl}</p>
        <hr />
        <p><strong>director:</strong> {film.director} / <strong>producer:</strong> {film.producer}</p>
      </Alert>
    </>);
  }

const mapStateToProps = (state: IAppState, { id }: IRecordProps): IFilmsRecordCmpProps =>
  ({ film: getFilmById(state, id) });

export const FilmsRecord = connect(mapStateToProps)(FilmsRecordCmp);