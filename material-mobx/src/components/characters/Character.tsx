import * as React from 'react'

import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithCharacterStore, withCharacterStore } from 'src/store';
import {
  URL_MOVIES,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from '../Router';
import { LinkButtonRef } from '../shared/LinkButtonReftsx';
import { Record, RecordH1, RecordInfo } from '../shared/Record';
import { PaperRef } from '../shared/ResourceRef';

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
        <RecordInfo>Species: {
          character.species.map(s =>
            <LinkButtonRef key={s.id} resourceRef={s} href={URL_SPECIES} />
          )}
        </RecordInfo><br />
        <RecordInfo>Homeworld:
            <LinkButtonRef resourceRef={character.homeworld} href={URL_PLANETS} />
        </RecordInfo><br />
        <RecordInfo>Height: {character.height}</RecordInfo><br />
        <RecordInfo>Mass: {character.mass}</RecordInfo><br />
        <RecordInfo>Skin color: {character.skinColor}</RecordInfo><br />
        <RecordInfo>Hair color: {character.hairColor}</RecordInfo><br />
        <RecordInfo>Movies:
          <PaperRef resources={character.movies} href={URL_MOVIES} />
        </RecordInfo><br />
        <RecordInfo>Starships:
          <PaperRef resources={character.starships} href={URL_STARSHIPS} />
        </RecordInfo><br />
        <RecordInfo>Vehicles:
          <PaperRef resources={character.vehicles} href={URL_VEHICLES} />
        </RecordInfo>
      </Record >
    );
  }

  @computed
  private get character() {
    return this.props.charatersStore.getById(this.props.characterId);
  }
}


export default withCharacterStore(Character);