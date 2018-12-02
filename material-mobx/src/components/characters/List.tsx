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
  ICharacter,
  IResourceRef,
} from 'src/model';
import {
  IWithCharacterStore,
  withCharacterStore,
} from 'src/store';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_SPECIES,
} from '../Router';
import {
  TableCellRefs
} from '../shared/CellRef';

type IListProps = IWithCharacterStore;

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
  character: ICharacter;
}
const Row: React.SFC<IRowProps> = ({ character }) => {
  const ref: IResourceRef = { id: character.id, label: character.name };
  return (
    <TableRow key={character.id}>
      <TableCellRefs resourcesRef={[ref]} href={URL_CHARACTERS} />
      <TableCellRefs resourcesRef={character.species} href={URL_SPECIES} />
      <TableCellRefs resourcesRef={character.movies} href={URL_MOVIES} />
    </TableRow >
  );
}

export default withCharacterStore(List);