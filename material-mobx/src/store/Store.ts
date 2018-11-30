import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction,
} from 'mobx';
import { IFetcher } from 'src/api';
import { ICharacter, IMovie, ISpecie } from 'src/model';

export interface IResourceType { id: string }

export class Store<T extends IResourceType> {
  @observable private resourcesMap: ObservableMap<string, T | undefined> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<T>) { }

  @action('fetch all')
  public async fetchAll() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const resources = await this.fetcher.fetchResources();
    runInAction('fetch all runInAction', () => {
      this.state = 'LOADED';
      this.addResources(...resources);
    })
  }

  @computed
  public get values(): T[] {
    return Array.from(this.resourcesMap.values()).filter(t => t !== undefined) as any;
  }

  @computed
  public get ids() {
    return Array.from(this.resourcesMap.keys());
  }

  public getById(id: string): T | undefined {
    if (!this.resourcesMap.has(id) && this.state === 'NOT_LOADED') {
      runInAction(`Fetching required ${id}`, () => {
        this.resourcesMap.set(id, undefined);
      });
      this.fetchById(id);
    }
    return this.resourcesMap.get(id);
  }

  @action('add resources')
  private addResources(...resources: T[]) {
    resources.forEach(resource => this.resourcesMap.set(resource.id, resource));
  }

  private async fetchById(id: string) {
    const specie = await this.fetcher.fetchResource(id);
    this.addResources(specie);
  }

}

export type MoviesStore = Store<IMovie>
export type CharactersStore = Store<ICharacter>
export type SpeciesStore = Store<ISpecie>