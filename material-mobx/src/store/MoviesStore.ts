import { action, computed, observable, runInAction } from 'mobx'

import { fetchMovie, fetchMovies } from 'src/api/movies';
import { IMovie } from "../model/Movie";

export class MovieStore {
  @observable public movies: IMovie[] = [];
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  @computed public get report(): string {
    return `movies count: ${this.movies.length}`;
  }

  @action
  public addMovies(...movies: IMovie[]) {
    this.movies = [...this.movies, ...movies].sort(
      (movie1, movie2) => movie1.episodeId < movie2.episodeId ? -1 : 1
    );
  }

  @action public async fetchMovies() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const movies = await fetchMovies();
    runInAction(() => {
      this.state = 'LOADED';
      this.addMovies(...movies);
    })
  }

  @action public async fetchMovie(id: string) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    if (this.getById(id) !== undefined) {
      return;
    }
    this.state = 'LOADING';
    const movie = await fetchMovie(id);
    runInAction(() => {
      this.addMovies(movie);
    })
  }

  public getById(id: string) {
    return this.movies.find(movie => movie.id === id);
  }
}

export const movieStore = new MovieStore();