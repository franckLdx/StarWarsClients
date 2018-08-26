import { IFilm, IPeople, IPlanet, ISpecies, IStarship, IVehicle } from "../model";
import { ILoadingResource, ILoadResource, IResourceLoaded } from "./resources/actions";

type AppAction = ILoadingResource
  | ILoadResource
  | IResourceLoaded<IFilm>
  | IResourceLoaded<IPeople>
  | IResourceLoaded<ISpecies>
  | IResourceLoaded<IPlanet>
  | IResourceLoaded<IStarship>
  | IResourceLoaded<IVehicle>

export default AppAction;