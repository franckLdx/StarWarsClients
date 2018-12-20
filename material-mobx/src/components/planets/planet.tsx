import * as React from 'react';

import { createStyles, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { observer } from "mobx-react";
import {
  IWithPlanetsStore,
  withPlanetsStore
} from 'src/store';
import {
  URL_CHARACTERS,
  URL_MOVIES
} from '../router';
import { Record, RecordH1, RecordInfo } from '../shared/record';
import { ResourcePaper } from '../shared/resourceRef';

const Style = (theme: Theme) => createStyles({
  simpleRef: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"simpleRef">;


interface IPlanetOwnProps {
  id: string
}

type PlanetsProps = IPlanetOwnProps & IWithPlanetsStore & StyleProps

@observer
class Planet extends React.Component<PlanetsProps, {}> {

  public render() {
    const planet = this.props.planetsStore.getById(this.props.id);
    if (planet === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>{planet.name}</RecordH1><br />
        <RecordInfo>Population {planet.population}</RecordInfo><br />
        <RecordInfo>Climate {planet.climate}</RecordInfo><br />
        <RecordInfo>Terrain {planet.terrain}</RecordInfo><br />
        <RecordInfo>Surface water {planet.surfaceWater} </RecordInfo><br />
        <RecordInfo>Diameter {planet.diameter}</RecordInfo><br />
        <RecordInfo>Gravity: {planet.gravity}  </RecordInfo><br />
        <RecordInfo>Orbital period {planet.orbitalPeriod} --- Rotation period {planet.rotationPeriod}</RecordInfo><br />
        <RecordInfo>Movies:
          <ResourcePaper resources={planet.movies} href={URL_MOVIES} />
        </RecordInfo><br />
        <RecordInfo>Residents:
          <ResourcePaper resources={planet.residents} href={URL_CHARACTERS} />
        </RecordInfo><br />
      </Record>
    );
  }

}


export default withStyles(Style)(withPlanetsStore(Planet));