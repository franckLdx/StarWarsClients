import { action, autorun, computed, observable } from 'mobx'

import { Movie } from "./Movie";

export class MovieStore {
  @observable public movies: Movie[] = [];
  // @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor() {
    // tslint:disable-next-line:no-console
    autorun(() => console.log(this.report));
  }

  @computed public get report(): string {
    return `movies count: ${this.movies.length}`;
  }


  @action
  public addMovie(movie: Movie) {
    this.movies = [...this.movies, movie].sort();
  }

}

export const movieStore = new MovieStore();