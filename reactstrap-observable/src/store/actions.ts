import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from "../model";
import { ILoadingResource, ILoadResource, IResourceLoaded, ISetCurrentPage } from "./resources/actions";

type AppAction = ILoadingResource
  | ILoadResource
  | IResourceLoaded<IFilm>
  | IResourceLoaded<IPeople>
  | IResourceLoaded<ISpecie>
  | IResourceLoaded<IPlanet>
  | IResourceLoaded<IStarship>
  | IResourceLoaded<IVehicle>
  | ISetCurrentPage

export default AppAction;