import * as React from 'react';

import { observer } from 'mobx-react';
import { URL_CHARACTERS } from 'src/components/Router';
import { IWithCharactersStore, withCharacterStore } from 'src/store';
import { CellMapper } from './Cell';

interface ICharacterCellOwnProps {
  ids: string[]
};
type CharacterCellProps = IWithCharactersStore & ICharacterCellOwnProps;

export const CharacterCell = observer(withCharacterStore(
  ({ ids, charatersStore }: CharacterCellProps) =>
    <CellMapper
      ids={ids}
      store={charatersStore}
      href={URL_CHARACTERS}
    />
));