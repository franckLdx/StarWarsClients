import * as React from 'react';

import { createStyles, Divider, Grid, StyledComponentProps, Theme, Typography, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import { observer } from 'mobx-react'
import { IMovie } from 'src/model/Movie';
import { IWithMoviesStore, withMoviesStore } from '../../store/injectors';
import { LinkIconButton } from '../shared/routes/LinkButton';

const ListStyle = (theme: Theme) => createStyles({
  item: {
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
});

type ListStyleProps = StyledComponentProps<"item">;
type IListProps = IWithMoviesStore & ListStyleProps;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.moviesStore.fetchAll();
  }

  public render() {
    const movies = this.props.moviesStore.valuesById;
    return (
      <Grid container={true} justify="center">
        {movies.map(movie => this.getItem(movie))}
      </Grid>
    )
  }

  private getItem = (movie: IMovie) => (
    <Grid
      className={this.props.classes!.item}
      item={true}
      xs={5}
      key={movie.id}
    >
      <MovieItem movie={movie} />
    </Grid>
  );
}

const MovieStyles = (theme: Theme) => createStyles({
  content: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
  },
  divider: {
    marginBottom: theme.spacing.unit
  },
  paper: {
    marginBottom: theme.spacing.unit,
  },
  title: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
});

type MovieItemStylePropsRaw = StyledComponentProps<"divider" | "title" | "content" | "paper">;
interface IMovieItemStylePropsRaw {
  movie: IMovie
};

const MovieItemRaw: React.SFC<IMovieItemStylePropsRaw & MovieItemStylePropsRaw> = props => {
  const { classes, movie } = props;
  return (
    <Paper>
      <Typography className={classes!.title} variant="h5">
        {movie.id} -- {movie.name}
        <LinkIconButton href={`/movies/${movie.id}`}>
          <InfoIcon />
        </LinkIconButton>
      </Typography>
      <Divider className={classes!.divider} />
      <Typography className={classes!.content} variant="subtitle1">{movie.openingCrawl}</Typography>
    </Paper>
  );
};
const MovieItem = withStyles(MovieStyles)(MovieItemRaw);

export default withStyles(ListStyle)(withMoviesStore(List));