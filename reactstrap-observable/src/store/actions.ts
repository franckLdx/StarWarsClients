import { IFilm, IPeople, IPlanets, ISpecies, IStarship, IVehicle } from "../model";
import { ILoadingResource, ILoadResource, IResourceLoaded } from "./resources/actions";

type AppAction = ILoadingResource
  | ILoadResource
  | IResourceLoaded<IFilm>
  | IResourceLoaded<IPeople>
  | IResourceLoaded<ISpecies>
  | IResourceLoaded<IPlanets>
  | IResourceLoaded<IStarship>
  | IResourceLoaded<IVehicle>

export default AppAction;