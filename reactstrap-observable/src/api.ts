
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { IFilm, IPeople, IPlanets, ISpecies, IStarship, IVehicle, ResourcesType } from './model';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: ResourcesType) => {
  const mapper = getMapper(resource);
  return ajax.getJSON(`${URL}/${resource}/`).pipe(map(mapper));
}

const getMapper = (resource: ResourcesType) => {
  switch (resource) {
    case 'films':
      return filmsMapper;
    case 'people':
      return peopleMapper;
    case 'species':
      return speciesMapper;
    case 'planets':
      return planetsMapper;
    case 'starships':
      return starshipMapper;
    case 'vehicles':
      return vehicleMapper;
    default:
      return (payload: any) => ({ ...payload });
  }
};

const filmsMapper = (payload: any): IFilm[] => {
  const mapper = (film: any) => ({
    director: film.director,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl,
    producer: film.producer,
    releaseDate: film.release_date,
    title: film.title,
  });
  return payload.results.map(mapper);
};

const peopleMapper = (payload: any): IPeople[] => {
  const mapper = (people: any) => ({
    birthYear: people.birth_year,
    eyeColor: people.eye_color,
    gender: people.gender,
    hairColor: people.hair_color,
    height: people.height,
    mass: people.mass,
    name: people.name,
    skinColor: people.skin_color,
  });
  return payload.results.map(mapper);
};

const speciesMapper = (payload: any): ISpecies[] => {
  const mapper = (specie: any) => ({
    averageHeight: specie.average_height,
    averageLifespan: specie.average_lifespan,
    classification: specie.classification,
    created: specie.created,
    designation: specie.designation,
    edited: specie.edited,
    eyeColors: specie.eye_colors,
    hairColors: specie.hair_colors,
    language: specie.language,
    name: specie.name,
  });
  return payload.results.map(mapper);
};

const planetsMapper = (payload: any): IPlanets[] => {
  const mapper = (specie: any) => ({
    climate: specie.climate,
    diameter: specie.diameter,
    gravity: specie.gravity,
    name: specie.name,
    orbitalPeriod: specie.orbital_period,
    population: specie.population,
    rotationPeriod: specie.rotation_period,
    surfaceWater: specie.surface_water,
    terrain: specie.terrain,
  });
  return payload.results.map(mapper);
};

const starshipMapper = (payload: any): IStarship[] => {
  const mapper = (starship: any) => ({
    cargoCapacity: starship.cargo_capacity,
    consumables: starship.consumables,
    costInCredits: starship.cost_in_credits,
    crew: starship.crew,
    hyperdriveRating: starship.hyperdrive_rating,
    length: starship.length,
    manufacturer: starship.manufacturer,
    maxAtmospheringSpeed: starship.max_atmosphering_speed,
    mglt: starship.MGLT,
    model: starship.model,
    name: starship.name,
    passengers: starship.passengers,
    starshipSlass: starship.starship_class,
  });
  return payload.results.map(mapper);
};

const vehicleMapper = (payload: any): IVehicle[] => {
  const mapper = (vehicle: any) => ({
    cargoCapacity: vehicle.cargo_capacity,
    consumables: vehicle.consumables,
    costInCredits: vehicle.costInCredits,
    crew: vehicle.crew,
    length: vehicle.length,
    manufacturer: vehicle.manufacturer,
    maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
    model: vehicle.model,
    name: vehicle.name,
    passengers: vehicle.passengers,
    vehicleClass: vehicle.vehicle_class,
  });
  return payload.results.map(mapper);
};