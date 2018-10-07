import { autorun, computed, observable } from 'mobx'

import { Movie } from "./Movie";

export class MovieState {
  @observable public movies: Movie[] = [];

  constructor() {
    // tslint:disable-next-line:no-console
    autorun(() => console.log(this.report));
  }

  @computed public get report(): string {
    return `movies count: ${this.movies.length}`;
  }

  public addMovie(movie: Movie) {
    this.movies = [...this.movies, movie].sort();
  }
}

export const movieState = new MovieState();