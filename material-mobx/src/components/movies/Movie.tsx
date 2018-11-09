import * as React from 'react';

import {
  createStyles,
  Paper,
  StyledComponentProps,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithMoviesStore, withMovieStore } from 'src/store/injectors';
import Characters from './Characters';

interface IItemOwnProps {
  id: string
}

type IItemProps = IWithMoviesStore & IItemOwnProps;

const Style = (theme: Theme) => createStyles({
  paper: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
  releaseDate: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: theme.spacing.unit,
  },
});

type StyleProps = StyledComponentProps<"paper" | "title" | "releaseDate">;

@observer
export class Movie extends React.Component<IItemProps & StyleProps, {}> {

  public render() {
    const movie = this.movie;
    if (movie === undefined) {
      return null;
    }
    const classes = this.props.classes!;
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h5">
          {movie.title} -- Episode {movie.episodeId}
        </Typography>
        <Typography className={classes.releaseDate} variant="subtitle1">
          Released: {movie.releaseDate}
        </Typography>
        <Typography className={classes.title} variant="subtitle1">
          Director: {movie.director} -- Producer: {movie.producer}
        </Typography>
        <Typography variant="subtitle1">
          {movie.openingCrawl}
        </Typography>
        <Paper>
          <Characters charactersId={movie.characters} />
        </Paper>
      </Paper>
    );
  }

  @computed
  private get movie() {
    return this.props.moviesStore.getById(this.props.id);
  }
}

export default withStyles(Style)(withMovieStore(Movie));