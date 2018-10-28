import * as React from 'react';
import { IWithCharacterStore, withCharactersStore } from 'src/store/injectors';

interface ICharactersOwnProps {
  charactersId: string[]
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore

class Characters extends React.Component<CharactersProps> {
  public componentDidMount() {
    this.props.charaterStore.fetchByIds(...this.props.charactersId);
  }

  public render() {
    const charaterStore = this.props.charaterStore;
    const charaters = this.props.charactersId
      .map(id => charaterStore.getById(id))
      .filter(charater => charater !== undefined)
      .sort((c1, c2) => c1!.name < c2!.name ? -1 : 1);
    // tslint:disable-next-line:no-console
    console.log('----->', charaters.length);

    return <div>{this.props.charactersId}<br />{charaters.map(c => c!.name)}</div >;
  }
}

export default withCharactersStore(Characters);