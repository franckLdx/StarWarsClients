import { combineReducers } from "redux";
import { STATE, RESOURCE } from './values';

const defaultSliceState = {
  state: STATE.UNDEFINED,
  data: []
}

export const defaultState = () => {
  return {
    films: defaultSliceState,
    people: defaultSliceState,
    species: defaultSliceState,
    planets: defaultSliceState,
    vehicles: defaultSliceState,
    starships: defaultSliceState,
  }
}

function getSliceReducer(resource) {
  return (state, action) => {
    if (action.resource !== resource) {
      return state ? state: defaultSliceState;
    }
    switch (action.type) {
      case STATE.LOADING:
      case STATE.ERROR:
        return {
          state: STATE.ERROR,
          data: []
        }
      case STATE.LOADED:
        return {
          state: STATE.LOADED,
          data: action.data
        }
      default:
        return state ? state: defaultSliceState;
    }
  }
}

export const reducer = combineReducers({
  films: getSliceReducer(RESOURCE.FILMS),
  people: getSliceReducer(RESOURCE.PEOPLE),
  species: getSliceReducer(RESOURCE.SPECIES),
  planets: getSliceReducer(RESOURCE.PLANETS),
  vehicles: getSliceReducer(RESOURCE.VEHICLES),
  starships: getSliceReducer(RESOURCE.STARSHIPS),
});
