import * as React from 'react';

import { movieState, MovieState } from "./movies/State";

const StateContext = React.createContext(movieState);

export interface IWithMovieState {
  moviesState: MovieState;
}

export const withMovieState = <P extends IWithMovieState>(Component: React.ComponentType<P>) => {
  return (props: Pick<P, Exclude<keyof P, keyof IWithMovieState>>) => {
    return (
      <StateContext.Consumer>
        {(moviesState) => <Component {...props} moviesState={moviesState} />}
      </StateContext.Consumer>
    )
  }
}