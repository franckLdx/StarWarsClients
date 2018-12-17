import * as React from 'react';

import {
  charactersFetcher,
  moviesFetcher,
  planetsFetcher,
  speciesFetcher,
  starshipsFetcher,
  vehiclesFetcher,
} from 'src/api';
import {
  CharactersStore,
  MoviesStore,
  PlanetsStore,
  SpeciesStore,
  StarshipsStore,
  Store,
  VehiclesStore
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

const planetsStore: PlanetsStore = new Store(planetsFetcher);
export interface IWithPlanetsStore {
  planetsStore: PlanetsStore;
}
export const withPlanetsStore = makeInjector<IWithPlanetsStore>(planetsStore, 'planetsStore');

const starshipsStore: StarshipsStore = new Store(starshipsFetcher);
export interface IWithStarshipsStore {
  starshipsStore: StarshipsStore;
}
export const withStarshipsStore = makeInjector<IWithStarshipsStore>(starshipsStore, 'starshipsStore');

const vehiclesStore: VehiclesStore = new Store(vehiclesFetcher);
export interface IWithVehiclesStore {
  vehiclesStore: VehiclesStore;
}
export const withvehiclesStore = makeInjector<IWithVehiclesStore>(vehiclesStore, 'vehiclesStore');
