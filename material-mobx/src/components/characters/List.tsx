import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { ICharacter, sortByName } from 'src/model';
import {
  IWithCharacterStore,
  withCharactersStore,
} from 'src/store/injectors';
import { MovieCell } from './list/MovieCell';
import { SpecieCell } from './list/SpecieCell';

type IListProps = IWithCharacterStore;

@observer
class List extends React.Component<IListProps, {}> {

  public componentDidMount() {
    this.props.charaterStore.fetchAll();
  }

  public render() {
    const characters = this.characters;
    return (
      <Table>
        <TableHead><TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Species</TableCell>
          <TableCell>Movies</TableCell>
        </TableRow></TableHead>
        <TableBody>
          {characters.map(character => this.getRow(character))}
        </TableBody>
      </Table>
    )
  }

  private getRow = (character: ICharacter) => {
    return (
      <TableRow key={character.id}>
        <TableCell >
          {character.name}
        </TableCell>
        <SpecieCell ids={character.species} />
        <MovieCell ids={character.movies} />
      </TableRow >
    );
  }

  @computed
  private get characters(): ICharacter[] {
    return sortByName(this.props.charaterStore.characters);
  }

}

export default withCharactersStore(List);