import { action, autorun, computed, observable } from 'mobx'

import { fetchMovies } from 'src/api/movies';
import { Movie } from "../model/Movie";

export class MovieStore {
  @observable public movies: Movie[] = [];
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor() {
    // tslint:disable-next-line:no-console
    autorun(() => console.log(this.report));
  }

  @computed public get report(): string {
    return `movies count: ${this.movies.length}`;
  }


  @action
  public addMovies(...movies: Movie[]) {
    this.movies = [...this.movies, ...movies].sort();
  }

  @action public async fetchMovies() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const movies = await fetchMovies();
    this.addMovies(...movies);
  }

}

export const movieStore = new MovieStore();