import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ICharacter, sortByName } from 'src/model/Characters';
import { IWithCharacterStore, withCharactersStore } from 'src/store/injectors';

interface ICharactersOwnProps {
  charactersId: string[]
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore

@observer
class Characters extends React.Component<CharactersProps> {

  public componentDidMount() {
    this.props.charaterStore.fetchByIds(...this.props.charactersId);
  }

  public render() {
    return <div>{this.characters.map(c => c!.name)}</div >;
  }

  @computed({ name: 'get characters' })
  private get characters(): ICharacter[] {
    const charactersId = this.props.charactersId;
    const store = this.props.charaterStore;
    const characters: any = charactersId
      .map(id => store.getById(id))
      .filter(character => character !== undefined);
    return sortByName(characters);
  }

}

export default withCharactersStore(Characters);