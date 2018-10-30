import {
  action,
  observable,
  ObservableMap,
} from 'mobx';

import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Characters';

export class CharaterStore {
  @observable private characters: ObservableMap<string, ICharacter> = observable.map({});
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

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

  public getById(id: string): ICharacter | undefined {
    return this.characters.get(id);
  }

  @action('add characters')
  private addCharacters(...characters: ICharacter[]) {
    characters.forEach(character => this.characters.set(character.id, character));
  }

}