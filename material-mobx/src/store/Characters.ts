import { computed } from 'mobx';
import { IFetcher } from 'src/api';
import { ICharacter, sortByName } from 'src/model';
import { Store } from "./Store";

export class CharactersStore extends Store<ICharacter> {
  constructor(fetcher: IFetcher<ICharacter>) {
    super(fetcher)
  }

  @computed
  public get valuesByName(): ICharacter[] {
    return sortByName(this.values);
  }
}