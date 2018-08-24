import { ISpecies } from "../../model/species";

export interface ISpeciesState {
  status: LoadingStatus;
  content: ISpecies[];
}