import * as React from 'react';

import { createStyles, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { observer } from "mobx-react";
import { IWithStarshipsStore } from 'src/store';
import { withStarshipsStore } from 'src/store/injectors';
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


interface ItarshipOwnProps {
  id: string
}

type StarshipsProps = ItarshipOwnProps & IWithStarshipsStore & StyleProps

@observer
class Starship extends React.Component<StarshipsProps, {}> {

  public render() {
    const starship = this.props.starshipsStore.getById(this.props.id);
    if (starship === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>{starship.name}</RecordH1><br />
        <RecordInfo>Class: {starship.class} -- Model: {starship.model}</RecordInfo><br />
        <RecordInfo>Passengers: {starship.passengers} -- Crew: {starship.crew}</RecordInfo><br />
        <RecordInfo>Max Megalights: {starship.mlgt} -- Max atmosphering speed: {starship.maxAtmospheringSpeed} -- Hyperdrive Rating: {starship.hyperdriveRating}</RecordInfo><br />
        <RecordInfo>Length: {starship.length}</RecordInfo><br />
        <RecordInfo>Manufacturer: {starship.manufacturer}</RecordInfo><br />
        <RecordInfo>Cost: {starship.cost}</RecordInfo><br />
        <RecordInfo>Movies:
          <ResourcePaper resources={starship.movies} href={URL_MOVIES} />
        </RecordInfo><br />
        <RecordInfo>Pilots:
          <ResourcePaper resources={starship.pilots} href={URL_CHARACTERS} />
        </RecordInfo><br />
      </Record>
    );
  }

}


export default withStyles(Style)(withStarshipsStore(Starship));