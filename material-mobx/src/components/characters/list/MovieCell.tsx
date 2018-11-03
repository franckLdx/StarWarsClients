import * as React from 'react';

import { observer } from 'mobx-react';
import { IMovie } from "src/model";
import { IWithMovieStore, withMovieStore } from 'src/store/injectors';
import { CellMapper } from './cell';

interface IMovieCellOwnProps {
  ids: string[];
}

type MovieCellProps = IMovieCellOwnProps & IWithMovieStore;

@observer
class MovieCellRaw extends React.Component<MovieCellProps, {}> {

  public render() {
    const { ids, moviesStore } = this.props;
    return <CellMapper
      ids={ids}
      store={moviesStore}
      mapper={movieMapper}
    />
  }

}

const movieMapper = (movie: IMovie) => ({ id: movie.id, label: movie.title });

export const MovieCell = withMovieStore(MovieCellRaw);