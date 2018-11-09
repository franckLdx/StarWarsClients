import * as React from 'react'

import Typography from '@material-ui/core/Typography';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithCharacterStore, withCharacterStore } from 'src/store';

interface ICharactersOwnProps {
  characterId: string
}

type CharactersProps = ICharactersOwnProps & IWithCharacterStore


@observer
class Character extends React.Component<CharactersProps> {
  public render() {
    const character = this.character;
    if (character === undefined) {
      return null;
    }
    return (
      <>
        <Typography variant="h6">{character.name} -- {character.birthYear}</Typography><br />
        <Typography variant="subtitle1">Gender: {character.gender}</Typography><br />
        <Typography variant="subtitle1">Height: {character.height}, Mass: {character.mass}, Skin color: {character.skinColor}, Hair color: {character.hairColor}</Typography>
      </>
    );
  }

  @computed
  private get character() {
    return this.props.charatersStore.getById(this.props.characterId);
  }
}


export default withCharacterStore(Character);