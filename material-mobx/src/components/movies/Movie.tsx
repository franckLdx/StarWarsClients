import * as React from 'react';

import {
  createStyles,
  StyledComponentProps,
  Theme,
  withStyles
} from '@material-ui/core';
import { observer } from 'mobx-react';
import { IWithMoviesStore, withMoviesStore } from 'src/store/injectors';
import {
  URL_CHARACTERS,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from '../router';
import { Record, RecordH1, RecordH2, RecordInfo } from '../shared/Record';
import { ResourcePaper } from '../shared/ResourceRef';

interface IMovieOwnProps {
  id: string
}

type MovieProps = IWithMoviesStore & IMovieOwnProps;

const Style = (theme: Theme) => createStyles({
  releaseDate: {
    fontWeight: 'bold',
  },
});

type StyleProps = StyledComponentProps<"title" | "releaseDate">;

@observer
export class Movie extends React.Component<MovieProps & StyleProps, {}> {

  public render() {
    const movie = this.props.moviesStore.getById(this.props.id);
    if (movie === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>
          {movie.name} -- Episode {movie.id}
        </RecordH1>
        <RecordH2>
          Released: {movie.releaseDate}
        </RecordH2>
        <RecordH2>
          Director: {movie.director} -- Producer: {movie.producers}
        </RecordH2>
        <RecordInfo>
          {movie.openingCrawl}
        </RecordInfo>
        <br />
        <RecordH2>
          Characters:
          <ResourcePaper resources={movie.characters} href={URL_CHARACTERS} />
        </RecordH2>
        <RecordH2>
          Planets:
          <ResourcePaper resources={movie.planets} href={URL_PLANETS} />
        </RecordH2>
        <RecordH2>
          Species:
          <ResourcePaper resources={movie.species} href={URL_SPECIES} />
        </RecordH2>
        <RecordH2>
          Starships:
          <ResourcePaper resources={movie.starships} href={URL_STARSHIPS} />
        </RecordH2>
        <RecordH2>
          Vehicles:
          <ResourcePaper resources={movie.vehicles} href={URL_VEHICLES} />
        </RecordH2>
      </Record >
    );
  }
}

export default withStyles(Style)(withMoviesStore(Movie));