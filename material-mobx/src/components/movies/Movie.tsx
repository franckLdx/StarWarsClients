import * as React from 'react';

import {
  createStyles,
  Paper,
  StyledComponentProps,
  Theme,
  withStyles
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithMoviesStore, withMovieStore } from 'src/store/injectors';
import { URL_CHARACTERS } from '../routes/Router';
import { LinkButtonRef } from '../shared/CellRef';
import { Record, RecordH1, RecordH2, RecordInfo } from '../shared/Record';

interface IItemOwnProps {
  id: string
}

type IItemProps = IWithMoviesStore & IItemOwnProps;

const Style = (theme: Theme) => createStyles({
  releaseDate: {
    fontWeight: 'bold',
  },
});

type StyleProps = StyledComponentProps<| "title" | "releaseDate">;

@observer
export class Movie extends React.Component<IItemProps & StyleProps, {}> {

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
        </RecordH2>
        <Paper>
          {movie.characters.map((resource) =>
            <LinkButtonRef key={resource.id} resourceRef={resource} href={URL_CHARACTERS} />
          )}
        </Paper>
      </Record>
    );
  }

  @computed
  private get movie() {
    return this.props.moviesStore.getById(this.props.id);
  }
}

export default withStyles(Style)(withMovieStore(Movie));