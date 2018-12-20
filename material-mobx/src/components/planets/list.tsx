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
import { IPlanet } from 'src/model/Planet';
import { IWithPlanetsStore, withPlanetsStore } from 'src/store/injectors';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_PLANETS,
} from '../router';
import {
  TableCellRefs
} from '../shared/resourceRef';

type IListProps = IWithPlanetsStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.planetsStore.fetchAll();
  }

  public render() {
    const planets = this.props.planetsStore.valuesByName;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CellHeader header='Name' />
            <CellHeader header='Residents' />
            <CellHeader header='Movies' />
          </TableRow>
        </TableHead>
        <TableBody>
          {planets.map(planet => <Row key={planet.id} planet={planet} />)}
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
  planet: IPlanet;
}
const Row: React.SFC<IRowProps> = ({ planet }) => {
  return (
    <TableRow key={planet.id}>
      <TableCellRefs resources={[planet]} href={URL_PLANETS} />
      <TableCellRefs resources={planet.residents} href={URL_CHARACTERS} />
      <TableCellRefs resources={planet.movies} href={URL_MOVIES} />
    </TableRow >
  );
}

export default withPlanetsStore(List);