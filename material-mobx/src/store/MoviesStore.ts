import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction,
} from 'mobx'

import { IFetcher } from 'src/api';
import { IMovie } from "../model/Movie";

export class MovieStore {
  @observable private movies: ObservableMap<string, IMovie> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<IMovie>) { }

  @action('fetch all movies')
  public async fetchAll() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const movies = await this.fetcher.fetchResources();
    runInAction('fetch all movies runInAction', () => {
      this.state = 'LOADED';
      this.addMovies(...movies);
    })
  }

  @action('fetch particular movies')
  public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    for (const id of ids) {
      if (this.movies.has(id)) {
        break;
      }
      const movie = await this.fetcher.fetchResource(id);
      this.addMovies(movie);
    }
  }

  public getById(id: string) {
    return this.movies.get(id);
  }

  @computed
  public get all() {
    return Array.from(this.movies.values());
  }

  @action('add movies')
  private addMovies(...movies: IMovie[]) {
    movies.forEach(movie => this.movies.set(movie.id, movie));
  }

}