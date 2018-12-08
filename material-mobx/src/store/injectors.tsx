import * as React from 'react';

import {
  charactersFetcher,
  moviesFetcher,
  speciesFetcher,
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

const movieStore: MoviesStore = new Store(moviesFetcher);
export interface IWithMoviesStore {
  moviesStore: MoviesStore;
}
export const withMoviesStore = makeInjector<IWithMoviesStore>(movieStore, 'moviesStore');

const charactersStore: CharactersStore = new Store(charactersFetcher);
export interface IWithCharactersStore {
  charatersStore: CharactersStore;
}
export const withCharacterStore = makeInjector<IWithCharactersStore>(charactersStore, 'charatersStore');

const speciesStore: SpeciesStore = new Store(speciesFetcher);
export interface IWithSpeciesStore {
  speciesStore: SpeciesStore;
}
export const withSpecieStore = makeInjector<IWithSpeciesStore>(speciesStore, 'speciesStore');
