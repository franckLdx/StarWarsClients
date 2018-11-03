import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction,
} from 'mobx';

import { IFetcher } from 'src/api';
import { ISpecie } from 'src/model';

export class SpecieStore {
  @observable private speciesMap: ObservableMap<string, ISpecie | undefined> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<ISpecie>) { }

  @action('fetch all species')
  public async fetchAll() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const characters = await this.fetcher.fetchResources();
    runInAction('fetch all species runInAction', () => {
      this.state = 'LOADED';
      this.addSPecies(...characters);
    })
  }

  @computed
  public get species() {
    return Array.from(this.speciesMap.values());
  }

  @computed
  public get ids() {
    return Array.from(this.speciesMap.keys());
  }

  public getById(id: string): ISpecie | undefined {
    if (!this.speciesMap.has(id)) {
      runInAction(`Fetching required Specie ${id}`, () => {
        this.speciesMap.set(id, undefined);
      });
      this.fetchById(id);
    }
    return this.speciesMap.get(id);
  }

  @action('add species')
  private addSPecies(...species: ISpecie[]) {
    species.forEach(specie => this.speciesMap.set(specie.id, specie));
  }

  private async fetchById(id: string) {
    const specie = await this.fetcher.fetchResource(id);
    this.addSPecies(specie);
  }

}