import * as React from 'react';

import {
  characterFetcher,
  movieFetcher,
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

const movieStore: MoviesStore = new Store(movieFetcher);
export interface IWithMoviesStore {
  moviesStore: MoviesStore;
}
export const withMoviesStore = makeInjector<IWithMoviesStore>(movieStore, 'moviesStore');

const charactersStore: CharactersStore = new Store(characterFetcher);
export interface IWithCharactersStore {
  charatersStore: CharactersStore;
}
export const withCharacterStore = makeInjector<IWithCharactersStore>(charactersStore, 'charatersStore');

const speciesStore: SpeciesStore = new Store(SpeciesFetcher);
export interface IWithSpeciesStore {
  speciesStore: SpeciesStore;
}
export const withSpecieStore = makeInjector<IWithSpeciesStore>(speciesStore, 'speciesStore');
