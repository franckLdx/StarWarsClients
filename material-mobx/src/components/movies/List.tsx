import * as React from 'react';

import { observer } from 'mobx-react'
import { doFetchMovies } from 'src/api/movies';
import { IWithMovieState, withMovieStore } from '../state/injectors';

@observer
class List extends React.Component<IWithMovieState, {}> {
  constructor(props: any) {
    super(props);
    // tslint:disable-next-line:no-console
    doFetchMovies().then(console.log);
  }

  public render() {
    const { movies } = this.props.moviesStore;
    return movies.map(movie => movie.title);
  }
}

export default withMovieStore(List);