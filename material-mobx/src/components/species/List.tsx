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
import {
  ISpecie,
} from 'src/model';
import {
  IWithSpeciesStore,
  withSpecieStore,
} from 'src/store';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_SPECIES,
} from '../router';
import {
  TableCellRefs
} from '../shared/resourceRef';

type IListProps = IWithSpeciesStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.speciesStore.fetchAll();
  }

  public render() {
    const species = this.props.speciesStore.valuesByName;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CellHeader header='Species' />
            <CellHeader header='Characters' />
            <CellHeader header='Movies' />
          </TableRow>
        </TableHead>
        <TableBody>
          {species.map(specie => <Row key={specie.id} specie={specie} />)}
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
  specie: ISpecie;
}
const Row: React.SFC<IRowProps> = ({ specie }) => {
  return (
    <TableRow key={specie.id}>
      <TableCellRefs resources={[specie]} href={URL_SPECIES} />
      <TableCellRefs resources={specie.characters} href={URL_CHARACTERS} />
      <TableCellRefs resources={specie.movies} href={URL_MOVIES} />
    </TableRow >
  );
}

export default withSpecieStore(List);