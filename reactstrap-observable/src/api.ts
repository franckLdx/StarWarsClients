
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceTagType } from './model';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: ResourceTagType, pageNumber: number) => {
  const mapper = getMapper(resource);
  const url = `${URL}/${resource}/${pageNumber !== undefined ? `?page=${pageNumber}` : ''}`;
  return ajax.getJSON(url).pipe(map(mapper));
}

const getMapper = (resource: ResourceTagType) => {
  const payloadMapper = getPayloadMapper(resource);
  return (payload: any) => {
    return {
      pageContent: payloadMapper(payload),
      pageCount: Math.ceil(payload.count / 10),
    }
  }
};

const getPayloadMapper = (resource: ResourceTagType) => {
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
    id: mapUrlToId(film.url),
    openingCrawl: film.opening_crawl,
    producer: film.producer,
    releaseDate: film.release_date,
    title: film.title,
  });
  return payload.results.map(mapper);
};

const peopleMapper = (payload: any): IPeople[] => {
  const mapper = (people: any): IPeople => ({
    birthYear: people.birth_year,
    eyeColor: people.eye_color,
    gender: people.gender,
    hairColor: people.hair_color,
    height: people.height,
    id: mapUrlToId(people.url),
    mass: people.mass,
    name: people.name,
    skinColor: people.skin_color,
  });
  return payload.results.map(mapper);
};

const speciesMapper = (payload: any): ISpecie[] => {
  const mapper = (specie: any): ISpecie => ({
    averageHeight: specie.average_height,
    averageLifespan: specie.average_lifespan,
    classification: specie.classification,
    designation: specie.designation,
    eyeColors: specie.eye_colors,
    hairColors: specie.hair_colors,
    id: mapUrlToId(specie.url),
    language: specie.language,
    name: specie.name,
  });
  return payload.results.map(mapper);
};

const planetsMapper = (payload: any): IPlanet[] => {
  const mapper = (planet: any): IPlanet => ({
    climate: planet.climate,
    diameter: planet.diameter,
    gravity: planet.gravity,
    id: mapUrlToId(planet.url),
    name: planet.name,
    orbitalPeriod: planet.orbital_period,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    surfaceWater: planet.surface_water,
    terrain: planet.terrain,
  });
  return payload.results.map(mapper);
};

const starshipMapper = (payload: any): IStarship[] => {
  const mapper = (starship: any): IStarship => ({
    cargoCapacity: starship.cargo_capacity,
    consumables: starship.consumables,
    costInCredits: starship.cost_in_credits,
    crew: starship.crew,
    hyperdriveRating: starship.hyperdrive_rating,
    id: mapUrlToId(starship.url),
    length: starship.length,
    manufacturer: starship.manufacturer,
    maxAtmospheringSpeed: starship.max_atmosphering_speed,
    mglt: starship.MGLT,
    model: starship.model,
    name: starship.name,
    passengers: starship.passengers,
    starshipClass: starship.starship_class,
  });
  return payload.results.map(mapper);
};

const vehicleMapper = (payload: any): IVehicle[] => {
  const mapper = (vehicle: any) => ({
    cargoCapacity: vehicle.cargo_capacity,
    consumables: vehicle.consumables,
    costInCredits: vehicle.costInCredits,
    crew: vehicle.crew,
    id: vehicle.url,
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

const mapUrlToId = (url: string) => {
  const strings = url.split('/');
  return strings[strings.length - 2];
}