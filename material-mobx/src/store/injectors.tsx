import * as React from 'react';

import { MovieFetcher } from 'src/api';
import { CaracterFetcher } from 'src/api/character';
import { CharaterStore } from './CharacterStore';
import { MovieStore } from "./MoviesStore";

const movieStore = new MovieStore(MovieFetcher);

const MovieContext = React.createContext(movieStore);

export interface IWithMovieStore {
  moviesStore: MovieStore;
}

export const withMovieStore = <P extends IWithMovieStore>(Component: React.ComponentType<P>) => {
  return (props: Pick<P, Exclude<keyof P, keyof IWithMovieStore>>) => {
    return (
      <MovieContext.Consumer>
        {(store) => <Component {...props} moviesStore={store} />}
      </MovieContext.Consumer>
    )
  }
}

const characterStore = new CharaterStore(CaracterFetcher);
const CharacterContext = React.createContext(characterStore);

export interface IWithCharacterStore {
  charaterStore: CharaterStore;
}

export const withCharactersStore = <P extends IWithCharacterStore>(Component: React.ComponentType<P>) => {
  return (props: Pick<P, Exclude<keyof P, keyof IWithCharacterStore>>) => {
    return (
      <CharacterContext.Consumer>
        {(store) => <Component {...props} charaterStore={store} />}
      </CharacterContext.Consumer>
    )
  }
}