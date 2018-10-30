import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction,
} from 'mobx';

import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Characters';

export class CharaterStore {
  @observable private characters: ObservableMap<string, ICharacter> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<ICharacter>) { }

  @action('fetch all characters')
  public async fetchAll() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const characters = await this.fetcher.fetchResources();
    runInAction('fetch all movies runInAction', () => {
      this.state = 'LOADED';
      this.addCharacters(...characters);
    })
  }

  @action('fetch some characters')
  public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    const fetching =
      ids
        .filter(id => !this.characters.has(id))
        .map(id => this.fetcher.fetchResource(id).then(character => this.addCharacters(character)));
    await Promise.all(fetching);
  }

  @computed
  public get all() {
    return Array.from(this.characters.values());
  }

  public getById(id: string): ICharacter | undefined {
    return this.characters.get(id);
  }

  @action('add characters')
  private addCharacters(...characters: ICharacter[]) {
    characters.forEach(character => this.characters.set(character.id, character));
  }

}