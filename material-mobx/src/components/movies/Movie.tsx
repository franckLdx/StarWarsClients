import * as React from 'react';

import {
  createStyles,
  Paper,
  StyledComponentProps,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import { observer } from 'mobx-react';
import { IWithMovieStore, withMovieStore } from 'src/store/injectors';
import Characters from './Characters';

interface IItemOwnProps {
  id: string
}

type IItemProps = IWithMovieStore & IItemOwnProps;

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

  public componentDidMount() {
    this.props.moviesStore.fetchByIds(this.props.id);
  }

  public render() {
    const classes = this.props.classes!;
    return (
      <Paper className={classes.paper}>
        {this.getContent()}
      </Paper>
    );
  }

  private getContent() {
    const classes = this.props.classes!;
    const movie = this.props.moviesStore.getById(this.props.id);
    if (movie === undefined || movie === null) {
      return null;
    }
    return (
      <>
        <Typography className={classes.title} variant="headline">
          {movie.title} -- Episode {movie.episodeId}
        </Typography>
        <Typography className={classes.releaseDate} variant="subheading">
          Released: {movie.releaseDate}
        </Typography>
        <Typography className={classes.title} variant="subheading">
          Director: {movie.director} -- Producer: {movie.producer}
        </Typography>
        <Typography variant="subheading">
          {movie.openingCrawl}
        </Typography>
        <Paper>
          <Characters charactersId={movie.characters} />
        </Paper>
      </>
    );
  }
}

export default withStyles(Style)(withMovieStore(Movie));