import * as React from 'react';

import { createStyles, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { observer } from "mobx-react";
import { IWithSpeciesStore, withSpecieStore } from 'src/store';
import {
  URL_CHARACTERS,
  URL_MOVIES
} from '../router';
import { Record, RecordH1, RecordInfo } from '../shared/Record';
import { ResourcePaper } from '../shared/ResourceRef';

const Style = (theme: Theme) => createStyles({
  simpleRef: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"simpleRef">;


interface ISPeciesOwnProps {
  id: string
}

type CharactersProps = ISPeciesOwnProps & IWithSpeciesStore & StyleProps

@observer
class Specie extends React.Component<CharactersProps, {}> {

  public render() {
    const specie = this.props.speciesStore.getById(this.props.id);
    if (specie === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>{specie.name}</RecordH1><br />
        <RecordInfo>{specie.designation} -- {specie.classification}</RecordInfo><br />
        <RecordInfo>Language: {specie.language}</RecordInfo>
        <RecordInfo>Skin colors: {specie.skinColors}</RecordInfo>
        <RecordInfo>Hair colors: {specie.hairColors}</RecordInfo>
        <RecordInfo>Eyes colors: {specie.eyeColors}</RecordInfo>
        <RecordInfo>Average Life span: {specie.averageLifespan}</RecordInfo>
        <RecordInfo>Average Height: {specie.averageHeight}</RecordInfo><br />
        <RecordInfo>Movies:
          <ResourcePaper resources={specie.movies} href={URL_MOVIES} />
        </RecordInfo><br />
        <RecordInfo>Characters:
          <ResourcePaper resources={specie.characters} href={URL_CHARACTERS} />
        </RecordInfo><br />
      </Record>
    );
  }

}


export default withStyles(Style)(withSpecieStore(Specie));