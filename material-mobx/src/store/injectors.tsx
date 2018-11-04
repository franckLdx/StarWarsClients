import * as React from 'react';

import {
  CaractersFetcher,
  MoviesFetcher,
  SpeciesFetcher
} from 'src/api';
import {
  CharactersStore,
  MoviesStore,
  SpeciesStore,
  Store
} from './Store';

const makeInjector = <S extends {}>(store: Store<any>, storeName: string) => {
  const injection: any = {};
  injection[storeName] = store;
  return <T extends {}>(Component: React.ComponentType<T>) => {
    type componentOnwProps = Pick<T, Exclude<keyof T, keyof S>>;
    return (props: componentOnwProps) => {
      const injectedProps = Object.assign({}, props, injection);
      return <Component {...injectedProps} />
    }
  }
}

const movieStore: MoviesStore = new Store(MoviesFetcher);
export interface IWithMoviesStore {
  moviesStore: MoviesStore;
}
export const withMovieStore = makeInjector<IWithMoviesStore>(movieStore, 'moviesStore');

const charactersStore: CharactersStore = new Store(CaractersFetcher);
export interface IWithCharacterStore {
  charatersStore: CharactersStore;
}
export const withCharacterStore = makeInjector<IWithCharacterStore>(charactersStore, 'charatersStore');

const speciesStore: SpeciesStore = new Store(SpeciesFetcher);
export interface IWithSpeciesStore {
  speciesStore: SpeciesStore;
}
export const withSPecieStore = makeInjector<IWithSpeciesStore>(speciesStore, 'speciesStore');
