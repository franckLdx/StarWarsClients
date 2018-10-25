import * as React from 'react';

import { MovieFetcher } from 'src/api';
import { MovieStore } from "./MoviesStore";

const movieStore = new MovieStore(MovieFetcher);

const StateContext = React.createContext(movieStore);

export interface IWithMovieState {
  moviesStore: MovieStore;
}

export const withMovieStore = <P extends IWithMovieState>(Component: React.ComponentType<P>) => {
  return (props: Pick<P, Exclude<keyof P, keyof IWithMovieState>>) => {
    return (
      <StateContext.Consumer>
        {(moviesState) => <Component {...props} moviesStore={moviesState} />}
      </StateContext.Consumer>
    )
  }
}