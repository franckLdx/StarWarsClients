import {
  action,
  computed,
  observable,
  ObservableMap,
} from 'mobx';

import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Characters';

export class CharaterStore {
  @observable private characters: ObservableMap<string, ICharacter> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";
  @observable private currentCharactersList: string[] = [];

  constructor(private fetcher: IFetcher<ICharacter>) { }

  @action('fetch some characters')
  public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    const fetching =
      ids
        .filter(id => !this.characters.has(id))
        .map(id => this.fetcher.fetchResource(id));
    const chraracters = await Promise.all(fetching);
    this.addCharacters(...chraracters);
  }

  @action('set current characters list')
  public async setCurrentListById(...ids: string[]) {
    this.currentCharactersList = ids;
    await this.fetchByIds(...ids);
  }

  @computed({ name: 'get current characters list' })
  public get currentList(): ICharacter[] {
    const characters: any[] = this.currentCharactersList
      .map(id => this.characters.get(id))
      .filter(character => character !== undefined)
    return characters.sort((c1, c2) => c1!.name < c2!.name ? -1 : 1);
  }

  @action('add characters')
  private addCharacters(...characters: ICharacter[]) {
    characters.forEach(character => this.characters.set(character.id, character));
  }

}