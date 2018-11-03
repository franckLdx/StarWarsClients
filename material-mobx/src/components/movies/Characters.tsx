import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ItemIcon from '@material-ui/icons/RadioButtonChecked';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ICharacter, sortByName } from 'src/model';
import { IWithCharacterStore, withCharactersStore } from 'src/store/injectors';

interface ICharactersOwnProps {
  charactersId: string[]
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore

@observer
class Characters extends React.Component<CharactersProps> {

  public render() {
    return <List>
      {
        this.characters.map(character =>
          <ListItem key={character.id}>
            <ListItemIcon><ItemIcon /></ListItemIcon><ListItemText primary={character.name} />
          </ListItem>
        )
      }
    </List >;
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