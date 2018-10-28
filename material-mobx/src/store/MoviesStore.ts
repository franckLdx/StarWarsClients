import { action, computed, observable, runInAction } from 'mobx'

import { IFetcher } from 'src/api';
import { IMovie } from "../model/Movie";

export class MovieStore {
  @observable public movies: IMovie[] = [];
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<IMovie>) { }

  @action public async fetch() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const movies = await this.fetcher.fetchResources();
    runInAction(() => {
      this.state = 'LOADED';
      this.addMovies(...movies);
    })
  }

  @action public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    for (const id of ids) {
      if (this.getById(id) !== undefined) {
        break;
      }
      const movie = await this.fetcher.fetchResource(id);
      this.addMovies(movie);
    }
  }

  public getById(id: string) {
    return this.movies.find(movie => movie.id === id);
  }

  @computed({ name: 'getByEpisode' })
  public get orderbyEpisodesId(): IMovie[] {
    return this.movies.sort(
      (movie1, movie2) => movie1.episodeId < movie2.episodeId ? -1 : 1
    );
  }

  @action
  private addMovies(...movies: IMovie[]) {
    const toAdd = movies.filter(({ id }) => this.getById(id) === undefined);
    this.movies.push(...toAdd);
  }

}