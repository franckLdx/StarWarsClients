import * as React from 'react';

import { observer } from 'mobx-react';
import { IMovie } from "src/model";
import { IWithMovieStore, withMovieStore } from 'src/store/injectors';
import { CellMapper } from './cell';

interface IMovieCellOwnProps {
  ids: string[];
}

type MovieCellProps = IMovieCellOwnProps & IWithMovieStore;

const movieMapper = (movie: IMovie) => ({ id: movie.id, label: movie.title });

export const MovieCell = observer(withMovieStore(
  ({ ids, moviesStore }: MovieCellProps) =>
    <CellMapper
      ids={ids}
      store={moviesStore}
      mapper={movieMapper}
    />
));