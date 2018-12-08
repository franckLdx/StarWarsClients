import * as React from 'react'

import { createStyles, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { IWithCharactersStore, withCharacterStore } from 'src/store';
import {
  URL_MOVIES,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from '../Router';
import { LinkButtonRef } from '../shared/LinkButtonRef';
import { Record, RecordH1, RecordInfo } from '../shared/Record';
import { ResourcePaper } from '../shared/ResourceRef';

const Style = (theme: Theme) => createStyles({
  simpleRef: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"simpleRef">;


interface ICharactersOwnProps {
  characterId: string
}

type CharactersProps = ICharactersOwnProps & IWithCharactersStore & StyleProps

@observer
class Character extends React.Component<CharactersProps, {}> {
  public render() {
    const character = this.character;
    if (character === undefined) {
      return null;
    }
    const simpleRefClassName = this.props.classes!.simpleRef;
    return (
      <Record>
        <RecordH1>{character.name} -- {character.birthYear}</RecordH1><br />
        <RecordInfo>Gender: {character.gender}</RecordInfo><br />
        <RecordInfo>Species: {
          character.species.map(species =>
            <LinkButtonRef
              className={simpleRefClassName}
              key={species.id}
              resource={species}
              href={URL_SPECIES}
            />
          )}
        </RecordInfo><br />
        <RecordInfo>Homeworld:
          <LinkButtonRef
            className={simpleRefClassName}
            resource={character.homeworld}
            href={URL_PLANETS}
          />
        </RecordInfo><br />
        <RecordInfo>Height: {character.height}</RecordInfo><br />
        <RecordInfo>Mass: {character.mass}</RecordInfo><br />
        <RecordInfo>Skin color: {character.skinColor}</RecordInfo><br />
        <RecordInfo>Hair color: {character.hairColor}</RecordInfo><br />
        <RecordInfo>Movies:
          <ResourcePaper resources={character.movies} href={URL_MOVIES} />
        </RecordInfo><br />
        <RecordInfo>Starships:
          <ResourcePaper resources={character.starships} href={URL_STARSHIPS} />
        </RecordInfo><br />
        <RecordInfo>Vehicles:
          <ResourcePaper resources={character.vehicles} href={URL_VEHICLES} />
        </RecordInfo>
      </Record >
    );
  }

  @computed
  private get character() {
    return this.props.charatersStore.getById(this.props.characterId);
  }
}


export default withStyles(Style)(withCharacterStore(Character));