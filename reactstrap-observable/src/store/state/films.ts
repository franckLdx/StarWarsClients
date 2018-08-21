import { IFilm } from "../../model/films";

export interface IFilmsState {
  status: Status;
  content: IFilm[];
}