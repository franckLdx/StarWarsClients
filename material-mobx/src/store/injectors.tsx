import * as React from 'react';

import { CaracterFetcher, MovieFetcher, SpecieFetcher } from 'src/api';
import { CharaterStore } from './CharacterStore';
import { MovieStore } from './MoviesStore';
import { SpecieStore } from './SpecieStore';

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

const specieStore = new SpecieStore(SpecieFetcher);
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