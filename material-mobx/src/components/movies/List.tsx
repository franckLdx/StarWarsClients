import * as React from 'react';

import { observer } from 'mobx-react'
import { IWithMovieState, withMovieState } from '../state/injectors';

@observer
class List extends React.Component<IWithMovieState, {}> {
  public render() {
    const { movies } = this.props.moviesState;
    return movies.map(movie => movie.title);
  }
}

export default withMovieState(List);