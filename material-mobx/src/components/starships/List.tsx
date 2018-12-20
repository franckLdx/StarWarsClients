import * as React from 'react';

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {
  observer
} from 'mobx-react';
import { IStarship } from 'src/model/Starship';
import {
  IWithStarshipsStore,
  withStarshipsStore
} from 'src/store/injectors';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_STARSHIPS,
} from '../router';
import {
  TableCellRefs
} from '../shared/resourceRef';
import { CellHeader } from '../table/cellHeader';

type IListProps = IWithStarshipsStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.starshipsStore.fetchAll();
  }

  public render() {
    const starships = this.props.starshipsStore.valuesByName;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CellHeader header='Starships' />
            <CellHeader header='Movies' />
            <CellHeader header='Pilots' />
          </TableRow>
        </TableHead>
        <TableBody>
          {starships.map(starship => <Row key={starship.id} starship={starship} />)}
        </TableBody>
      </Table >
    )
  }
}

interface IRowProps {
  starship: IStarship;
}
const Row: React.SFC<IRowProps> = ({ starship }) => {
  return (
    <TableRow key={starship.id}>
      <TableCellRefs resources={[starship]} href={URL_STARSHIPS} />
      <TableCellRefs resources={starship.movies} href={URL_MOVIES} />
      <TableCellRefs resources={starship.pilots} href={URL_CHARACTERS} />
    </TableRow >
  );
}

export default withStarshipsStore(List);