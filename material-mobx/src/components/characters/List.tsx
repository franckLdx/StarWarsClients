import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { ICharacter, sortByName } from 'src/model';
import {
  IWithCharacterStore,
  withCharacterStore,
} from 'src/store';
import { CharacterCell } from './list/CharacterCell';
import { MovieCell } from './list/MovieCell';
import { SpecieCell } from './list/SpecieCell';

type IListProps = IWithCharacterStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.charatersStore.fetchAll();
  }

  public render() {
    const characters = this.characters;
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
          {characters.map(character => this.getRow(character))}
        </TableBody>
      </Table>
    )
  }

  private getRow = (character: ICharacter) => {
    return (
      <TableRow key={character.id}>
        <CharacterCell ids={[character.id]} />
        <SpecieCell ids={character.species} />
        <MovieCell ids={character.movies} />
      </TableRow >
    );
  }

  @computed
  private get characters(): ICharacter[] {
    return sortByName(this.props.charatersStore.values);
  }

}

interface ICellHeaderProps {
  header: string;
}
const CellHeader: React.SFC<ICellHeaderProps> = ({ header }) =>
  (
    <>
      <TableCell><Typography variant="subtitle1">
        {header}
      </Typography></TableCell>
    </>
  );

export default withCharacterStore(List);