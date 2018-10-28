import { action, observable } from 'mobx';
import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Characters';

export class CharaterStore {
  @observable public characters: ICharacter[] = [];
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";

  constructor(private fetcher: IFetcher<ICharacter>) { }

  @action
  public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    const fetching: Array<Promise<ICharacter>> = [];
    for (const id of ids) {
      if (this.getById(id) !== undefined) {
        break;
      }
      fetching.push(this.fetcher.fetchResource(id));
    }
    const chraracters = await Promise.all(fetching);
    await this.addCharacters(...chraracters);
  }

  public getById(id: string) {
    return this.characters.find(character => character.id === id);
  }

  @action
  private addCharacters(...characters: ICharacter[]) {
    this.characters = [...this.characters, ...characters];
  }
}