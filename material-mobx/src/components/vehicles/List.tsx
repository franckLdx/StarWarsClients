import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import {
  observer
} from 'mobx-react';
import { IVehicle } from 'src/model/Vehicle';
import {
  IWithVehiclesStore,
  withvehiclesStore as withVehiclesStore
} from 'src/store/injectors';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_VEHICLES,
} from '../Router';
import {
  TableCellRefs
} from '../shared/ResourceRef';

type IListProps = IWithVehiclesStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.vehiclesStore.fetchAll();
  }

  public render() {
    const vehicles = this.props.vehiclesStore.valuesByName;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CellHeader header='Vehicles' />
            <CellHeader header='Movies' />
            <CellHeader header='Pilots' />
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map(vehicle => <Row key={vehicle.id} vehicle={vehicle} />)}
        </TableBody>
      </Table >
    )
  }
}

interface ICellHeaderProps {
  header: string;
}
const CellHeader: React.SFC<ICellHeaderProps> = ({ header }) =>
  (
    <TableCell>
      <Typography variant="subtitle1">
        {header}
      </Typography>
    </TableCell>
  );

interface IRowProps {
  vehicle: IVehicle;
}
const Row: React.SFC<IRowProps> = ({ vehicle }) => {
  return (
    <TableRow key={vehicle.id}>
      <TableCellRefs resources={[vehicle]} href={URL_VEHICLES} />
      <TableCellRefs resources={vehicle.movies} href={URL_MOVIES} />
      <TableCellRefs resources={vehicle.pilots} href={URL_CHARACTERS} />
    </TableRow >
  );
}

export default withVehiclesStore(List);