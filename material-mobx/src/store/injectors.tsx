import * as React from 'react';

import {
  CaracterFetcher,
  MovieFetcher,
  SpecieFetcher
} from 'src/api';
import {
  CharacterStore,
  MovieStore,
  SpecieStore,
  Store
} from './Store';

const movieStore: MovieStore = new Store(MovieFetcher);
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

const characterStore: CharacterStore = new Store(CaracterFetcher);
const CharacterContext = React.createContext(characterStore);

export interface IWithCharacterStore {
  charaterStore: CharacterStore;
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

const specieStore: SpecieStore = new Store(SpecieFetcher);
const SpecieContext = React.createContext(specieStore);

export interface IWithSpecieStore {
  specieStore: SpecieStore;
}

export const withSPecieStore = <P extends IWithSpecieStore>(Component: React.ComponentType<P>) => {
  return (props: Pick<P, Exclude<keyof P, keyof IWithSpecieStore>>) => {
    return (
      <SpecieContext.Consumer>
        {(store) => <Component {...props} specieStore={store} />}
      </SpecieContext.Consumer>
    )
  }
}