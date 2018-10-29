import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction
} from 'mobx'

import { IFetcher } from 'src/api';
import { IMovie } from "../model/Movie";

export class MovieStore {
  @observable private movies: ObservableMap<string, IMovie> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";
  @observable private currentMovieId: string | null = null;

  constructor(private fetcher: IFetcher<IMovie>) { }

  @action('fetch all movies')
  public async fetch() {
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

  @action('set current movie')
  public async setCurrentById(id: string | null) {
    this.currentMovieId = id;
    if (id !== null && !this.movies.has(id)) {
      await this.fetchByIds(id);
    }
  }

  @computed({ name: 'getByEpisode' })
  public get orderbyEpisodesId(): IMovie[] {
    const movies: IMovie[] = Array.from(this.movies.values());
    return movies.sort(
      (movie1, movie2) => movie1.episodeId < movie2.episodeId ? -1 : 1
    );
  }

  @action('add movies')
  private addMovies(...movies: IMovie[]) {
    movies.forEach(movie => this.movies.set(movie.id, movie));
  }


  @computed({ name: 'get current' })
  public get current(): IMovie | null | undefined {
    if (this.currentMovieId === null) {
      return null;
    }
    return this.movies.get(this.currentMovieId);
  }
}