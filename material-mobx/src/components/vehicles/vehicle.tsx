import * as React from 'react';

import { createStyles, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { observer } from "mobx-react";
import { IWithVehiclesStore, withvehiclesStore } from 'src/store/injectors';
import {
  URL_MOVIES
} from '../Router';
import { Record, RecordH1, RecordInfo } from '../shared/Record';
import { ResourcePaper } from '../shared/ResourceRef';

const Style = (theme: Theme) => createStyles({
  simpleRef: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"simpleRef">;


interface IVehicleOwnProps {
  id: string
}

type VehiclesProps = IVehicleOwnProps & IWithVehiclesStore & StyleProps

@observer
class Vehicle extends React.Component<VehiclesProps, {}> {

  public render() {
    const vehicle = this.props.vehiclesStore.getById(this.props.id);
    if (vehicle === undefined) {
      return null;
    }
    return (
      <Record>
        <RecordH1>{vehicle.name}</RecordH1><br />
        <RecordInfo>Class: {vehicle.class} -- Model: {vehicle.model}</RecordInfo><br />
        <RecordInfo>Passengers: {vehicle.passengers} -- Crew: {vehicle.crew}</RecordInfo><br />
        <RecordInfo>Length: {vehicle.length}</RecordInfo><br />
        <RecordInfo>Manufacturer: {vehicle.manufacturer}</RecordInfo><br />
        <RecordInfo>Cost: {vehicle.cost}</RecordInfo><br />
        <RecordInfo>Movies:
          <ResourcePaper resources={vehicle.movies} href={URL_MOVIES} />
        </RecordInfo><br />
      </Record>
    );
  }

}

export default withStyles(Style)(withvehiclesStore(Vehicle));