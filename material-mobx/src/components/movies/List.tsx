import * as React from 'react';

import { observer } from 'mobx-react'
import { fetchMovies } from 'src/api/movies';
import { IWithMovieState, withMovieStore } from '../../store/injectors';

@observer
class List extends React.Component<IWithMovieState, {}> {
  constructor(props: any) {
    super(props);
    // tslint:disable-next-line:no-console
    fetchMovies().then(console.log);
  }

  public componentDidMount() {
    this.props.moviesStore.fetchMovies();
  }

  public render() {
    const { movies } = this.props.moviesStore;
    return movies.map(movie => movie.title);
  }
}

export default withMovieStore(List);