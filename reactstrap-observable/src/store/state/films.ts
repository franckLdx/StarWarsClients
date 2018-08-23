import { IFilm } from "../../model/films";

export interface IFilmsState {
  status: LoadingStatus;
  content: IFilm[];
}