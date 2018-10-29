import * as React from 'react';
import { IWithCharacterStore, withCharactersStore } from 'src/store/injectors';

interface ICharactersOwnProps {
  charactersId: string[]
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore

class Characters extends React.Component<CharactersProps> {
  public componentDidMount() {
    this.props.charaterStore.setCurrentListById(...this.props.charactersId);
  }

  public render() {
    const charaters = this.props.charaterStore.currentList;
    if (!charaters) {
      return null;
    }
    return <div>{charaters.map(c => c!.name)}</div >;
  }
}

export default withCharactersStore(Characters);