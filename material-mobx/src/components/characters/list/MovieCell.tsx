import * as React from 'react';

import { observer } from 'mobx-react';
import { URL_MOVIES } from 'src/components/Router';
import { IWithMoviesStore, withMoviesStore } from 'src/store/injectors';
import { CellMapper } from './Cell';

interface IMovieCellOwnProps {
  ids: string[];
}

type MovieCellProps = IMovieCellOwnProps & IWithMoviesStore;

export const MovieCell = observer(withMoviesStore(
  ({ ids, moviesStore }: MovieCellProps) =>
    <CellMapper
      ids={ids}
      store={moviesStore}
      href={URL_MOVIES}
    />
));