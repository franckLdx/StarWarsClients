export type FilmTag = 'films';

export interface IFilm {
  id: string,
  title: string,
  episodeId: number,
  openingCrawl: string,
  director: string,
  producer: string,
  releaseDate: string,
}

export type PeopleTag = 'people';

export interface IPeople {
  id: string,
  name: string,
  height: string,
  mass: string,
  hairColor: string,
  skinColor: string,
  eyeColor: string,
  birthYear: string,
  gender: string,
}

export type PlanetTag = 'planets';

export interface IPlanet {
  id: string,
  climate: string,
  diameter: number,
  gravity: string,
  name: string,
  orbitalPeriod: number,
  population: number
  rotationPeriod: number,
  surfaceWater: number,
  terrain: string,
}

export type SpecieTag = 'species';

export interface ISpecie {
  id: string,
  averageHeight: string,
  averageLifespan: string,
  classification: string,
  designation: string,
  eyeColors: string,
  hairColors: string,
  language: string,
  name: string,
}

export type StarshipTag = 'starships';

export interface IStarship {
  id: string,
  name: string,
  model: string,
  manufacturer: string
  costInCredits: string
  length: string
  maxAtmospheringSpeed: string,
  crew: string,
  passengers: string,
  cargoCapacity: string,
  consumables: string,
  hyperdriveRating: string,
  mglt: string,
  starshipClass: string,
}

export type VehicleTag = 'vehicles';

export interface IVehicle {
  id: string,
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: number
  length: number,
  max_atmosphering_speed: number,
  crew: number,
  passengers: number,
  cargoCapacity: number,
  consumables: string,
  vehicle_class: string,
}