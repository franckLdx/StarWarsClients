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
import {
  ICharacter,
} from 'src/model';
import {
  IWithCharactersStore,
  withCharacterStore,
} from 'src/store';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_SPECIES,
} from '../router';
import {
  TableCellRefs
} from '../shared/resourceRef';
import { CellHeader } from '../table/cellHeader';

type IListProps = IWithCharactersStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.charatersStore.fetchAll();
  }

  public render() {
    const characters = this.props.charatersStore.valuesByName;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CellHeader header='Name' />
            <CellHeader header='Species' />
            <CellHeader header='Movies' />
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(character => <Row key={character.id} character={character} />)}
        </TableBody>
      </Table >
    )
  }
}

interface IRowProps {
  character: ICharacter;
}
const Row: React.SFC<IRowProps> = ({ character }) => {
  return (
    <TableRow key={character.id}>
      <TableCellRefs resources={[character]} href={URL_CHARACTERS} />
      <TableCellRefs resources={character.species} href={URL_SPECIES} />
      <TableCellRefs resources={character.movies} href={URL_MOVIES} />
    </TableRow >
  );
}

export default withCharacterStore(List);