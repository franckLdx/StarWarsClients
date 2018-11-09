import * as React from 'react';

import { List, Typography } from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { ICharacter, sortByName } from 'src/model';
import { IWithCharacterStore, withCharacterStore } from 'src/store';
import { LinkButton } from '../routes/LinkButton';
import { URL_CHARACTERS } from '../routes/Router';

interface ICharactersOwnProps {
  charactersId: string[]
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore

@observer
class Characters extends React.Component<CharactersProps> {

  public render() {
    return <List>
      {
        this.characters.map(character => {
          return (
            <LinkButton key={character.id} href={`${URL_CHARACTERS}/${character.id}`}>
              <Typography variant="subtitle1">{character.name}</Typography>
            </LinkButton>
          );
        })
      }
    </List >;
  }

  @computed({ name: 'get characters' })
  private get characters(): ICharacter[] {
    const charactersId = this.props.charactersId;
    const store = this.props.charatersStore;
    const characters: any = charactersId
      .map(id => store.getById(id))
      .filter(character => character !== undefined);
    return sortByName(characters);
  }

}

export default withCharacterStore(Characters);