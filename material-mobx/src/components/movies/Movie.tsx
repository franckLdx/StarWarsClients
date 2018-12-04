import * as React from 'react';

import {
  createStyles,
  StyledComponentProps,
  Theme,
  withStyles
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithMoviesStore, withMovieStore } from 'src/store/injectors';
import { URL_CHARACTERS, URL_PLANETS, URL_SPECIES, URL_STARSHIPS, URL_VEHICLES } from '../Router';
import { Record, RecordH1, RecordH2, RecordInfo } from '../shared/Record';
import { PaperRef } from '../shared/ResourceRef';

interface IItemOwnProps {
  id: string
}

type MovieProps = IWithMoviesStore & IItemOwnProps;

const Style = (theme: Theme) => createStyles({
  releaseDate: {
    fontWeight: 'bold',
  },
});

type StyleProps = StyledComponentProps<"title" | "releaseDate">;

@observer
export class Movie extends React.Component<MovieProps & StyleProps, {}> {

  public render() {
    const movie = this.movie;
    if (movie === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>
          {movie.title} -- Episode {movie.id}
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
          <PaperRef resources={movie.characters} href={URL_CHARACTERS} />
        </RecordH2>
        <RecordH2>
          Planets:
          <PaperRef resources={movie.planets} href={URL_PLANETS} />
        </RecordH2>
        <RecordH2>
          Species:
          <PaperRef resources={movie.species} href={URL_SPECIES} />
        </RecordH2>
        <RecordH2>
          Starships:
          <PaperRef resources={movie.starships} href={URL_STARSHIPS} />
        </RecordH2>
        <RecordH2>
          Vehicles:
          <PaperRef resources={movie.vehicles} href={URL_VEHICLES} />
        </RecordH2>
      </Record >
    );
  }

  @computed
  private get movie() {
    return this.props.moviesStore.getById(this.props.id);
  }
}

export default withStyles(Style)(withMovieStore(Movie));