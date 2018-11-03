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
  @observable private moviesMap: ObservableMap<string, IMovie | undefined> = observable.map({});
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

  public getById(id: string): IMovie | undefined {
    if (!this.moviesMap.has(id)) {
      runInAction(`Fetching required Movie ${id}`, () => {
        this.moviesMap.set(id, undefined);
      });
      this.fetchById(id);
    }
    return this.moviesMap.get(id);
  }

  private async fetchById(id: string) {
    const character = await this.fetcher.fetchResource(id);
    this.addMovies(character)
  }

  @computed
  public get movies(): IMovie[] {
    return Array.from(this.moviesMap.values()).filter(c => c !== undefined) as any;
  }

  @computed
  public get ids() {
    return Array.from(this.moviesMap.keys());
  }

  @action('add movies')
  private addMovies(...movies: IMovie[]) {
    movies.forEach(movie => this.moviesMap.set(movie.id, movie));
  }

}