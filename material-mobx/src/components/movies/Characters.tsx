import * as React from 'react';

import { List } from '@material-ui/core';
import { IResourceRef } from 'src/model';
import { URL_CHARACTERS } from '../routes/Router';
import { LinkButtonRef } from '../shared/CellRef';

interface ICharactersProps {
  characters: IResourceRef[]
}

export const Characters: React.SFC<ICharactersProps> = ({ characters }) => (
  <List>
    {
      characters.map(character => (
        <LinkButtonRef key={character.id} resourceRef={character} href={URL_CHARACTERS} />
      ))
    }
  </List >
);