import {
  action,
  computed,
  observable,
  ObservableMap,
  runInAction,
} from 'mobx';

import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Character';

export class CharaterStore {
  @observable private charactersMap: ObservableMap<string, ICharacter | undefined> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<ICharacter>) { }

  @action('fetch all characters')
  public async fetchAll() {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    this.state = 'LOADING';
    const characters = await this.fetcher.fetchResources();
    runInAction('fetch all characters runInAction', () => {
      this.state = 'LOADED';
      this.addCharacters(...characters);
    })
  }

  @computed
  public get characters(): ICharacter[] {
    return Array.from(this.charactersMap.values()).filter(c => c !== undefined) as any;
  }

  @computed
  public get ids() {
    return Array.from(this.charactersMap.keys());
  }

  public async fetchById(id: string) {
    const character = await this.fetcher.fetchResource(id);
    this.addCharacters(character)
  }

  public getById(id: string): ICharacter | undefined {
    if (!this.charactersMap.has(id)) {
      runInAction(`Fetching required character ${id}`, () => {
        this.charactersMap.set(id, undefined);
      });
      this.fetchById(id);
    }
    return this.charactersMap.get(id);
  }

  @action('add characters')
  private addCharacters(...characters: ICharacter[]) {
    characters.forEach(character => this.charactersMap.set(character.id, character));
  }

}