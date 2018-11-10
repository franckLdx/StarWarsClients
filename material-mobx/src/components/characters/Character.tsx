import * as React from 'react'

import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithCharacterStore, withCharacterStore } from 'src/store';
import { Record, RecordH1, RecordInfo } from '../shared/Record';

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
      <Record>
        <RecordH1>{character.name} -- {character.birthYear}</RecordH1><br />
        <RecordInfo>Gender: {character.gender}</RecordInfo><br />
        <RecordInfo>Height: {character.height}</RecordInfo><br />
        <RecordInfo>Mass: {character.mass}</RecordInfo><br />
        <RecordInfo>Skin color: {character.skinColor}</RecordInfo><br />
        <RecordInfo>Hair color: {character.hairColor}</RecordInfo><br />
      </Record >
    );
  }

  @computed
  private get character() {
    return this.props.charatersStore.getById(this.props.characterId);
  }
}


export default withCharacterStore(Character);