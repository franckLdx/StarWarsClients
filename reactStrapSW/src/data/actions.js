import { STATE, RESOURCE } from './values';

export function doFetch(query, field) {
  return fetch(`http://127.0.0.1:8080/api/starWars?query=${query}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(decoded => decoded.data[field]);//.catch(err => { debugger;});
}

function setResource(resource, state, data=[]) {
  return {
    resource: resource,
    type: state,
    data: data
  }
}

export function fetchFilms() {
  return (dispatch, state) => {
    if (state().films.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.FILMS, STATE.LOADING));
    doFetch('{films(sort:"episode_id"){title,episode_id,opening_crawl,director,release_date,people {id, name},planets {id, name},starships {id, name},vehicles {id, name}}}', 'films')
      .then(data => dispatch(setResource(RESOURCE.FILMS, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.FILMS, 'ERROR'));
        console.error(err)
      });
  };
}

export function fetchPeople() {
  return (dispatch, state) => {
    if (state().people.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.PEOPLE, STATE.LOADING));
    doFetch('{people(sort:"name"){id,name,birth_year,eye_color,gender,hair_color,height,mass,skin_color,species{id,name},homeworld{id,name},films{episode_id,title},starships{id,name},vehicles{id,name}}}', 'people')
      .then(data => dispatch(setResource(RESOURCE.PEOPLE, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.PEOPLE, 'ERROR'));
        console.error(err)
      });
  };
}

export function fetchPlanets() {
  return (dispatch, state) => {
    if (state().planets.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.PLANETS, STATE.LOADING));
    doFetch('{planets(sort:"name"){id,name,diameter,rotation_period,orbital_period,gravity,population,surface_water,residents{id,name},films{episode_id,title}}}', 'planets')
      .then(data => dispatch(setResource(RESOURCE.PLANETS, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.PLANETS, 'ERROR'));
        console.error(err)
      });
  };
}

export function fetchStarships() {
  return (dispatch, state) => {
    if (state().starships.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.STARSHIPS, STATE.LOADING));
    doFetch('{starships(sort:"name"){id,name,model,starship_class,manufacturer,cost_in_credits,length,crew,passengers,max_atmosphering_speed,hyperdrive_rating,MGLT,cargo_capacity,consumables,pilots{id,name},films{episode_id,title}}}', 'starships')
      .then(data => dispatch(setResource(RESOURCE.STARSHIPS, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.STARSHIPS, 'ERROR'));
        console.error(err)
      });
  };
}

export function fetchSpecies() {
  return (dispatch, state) => {
    if (state().species.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.SPECIES, STATE.LOADING));
    doFetch('{species(sort:"name"){id,name,classification,designation,average_height,average_lifespan,language,people{id,name},films{episode_id,title}}}', 'species')
      .then(data => dispatch(setResource(RESOURCE.SPECIES, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.SPECIES, 'ERROR'));
        console.error(err);
      });
  };
}

export function fetchVehicles() {
  return (dispatch, state) => {
    if (state().vehicles.state === STATE.LOADED) {
      return;
    }
    dispatch(setResource(RESOURCE.VEHICLES, STATE.LOADING));
    doFetch('{vehicles(sort:"name"){id,name,model,vehicle_class,manufacturer,length,cost_in_credits,crew,passengers,max_atmosphering_speed,cargo_capacity,consumables,pilots{id,name},films{episode_id,title}}}', 'vehicles')
      .then(data => dispatch(setResource(RESOURCE.VEHICLES, STATE.LOADED, data)))
      .catch(err => {
        dispatch(setResource(RESOURCE.VEHICLES, 'ERROR'));
        console.error(err)
      });
  };
}