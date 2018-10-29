import { action, computed, observable, runInAction } from 'mobx';
import { IFetcher } from 'src/api';
import { ICharacter } from 'src/model/Characters';

export class CharaterStore {
  @observable public characters: ICharacter[] = [];
  @observable private state: "NOT_LOADED" | "LOADING" | "LOADED" = "NOT_LOADED";
  @observable private currentCharactersList: ICharacter[] = [];

  constructor(private fetcher: IFetcher<ICharacter>) { }

  @action('fetch some characters')
  public async fetchByIds(...ids: string[]) {
    if (this.state !== 'NOT_LOADED') {
      return;
    }
    const fetching: Array<Promise<ICharacter>> = [];
    for (const id of ids) {
      if (this.getById(id) === undefined) {
        fetching.push(this.fetcher.fetchResource(id));
      }
    }
    const chraracters = await Promise.all(fetching);
    this.addCharacters(...chraracters);
  }

  @action('set current characters list')
  public async setCurrentListById(...ids: string[]) {
    const toDownload = ids.filter(id => this.getById(id) === undefined);
    await this.fetchByIds(...toDownload);
    runInAction('set current characters list rnInAction', () => {
      this.currentCharactersList = ids.map(id => this.getById(id)!);
    });
  }

  @computed({ name: 'get current characters list' })
  public get currentList(): ICharacter[] | null | undefined {
    if (!this.currentCharactersList) {
      return this.currentCharactersList;
    }
    return this.currentCharactersList
      .slice().sort((c1, c2) => c1!.name < c2!.name ? -1 : 1);
  }

  @action('add characters')
  private addCharacters(...characters: ICharacter[]) {
    this.characters = [...this.characters, ...characters];
  }

  private getById(id: string) {
    return this.characters.find(character => character.id === id);
  }
}