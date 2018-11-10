import * as React from 'react';

import { observer } from 'mobx-react';
import { URL_CHARACTERS } from 'src/components/routes/Router';
import { ICharacter } from 'src/model';
import { IWithCharacterStore, withCharacterStore } from 'src/store';
import { CellMapper } from './Cell';

interface ICharacterCellOwnProps {
  ids: string[]
};
type CharacterCellProps = IWithCharacterStore & ICharacterCellOwnProps;

const characterMapper = (character: ICharacter) => ({ id: character.id, label: character.name });

export const CharacterCell = observer(withCharacterStore(
  ({ ids, charatersStore }: CharacterCellProps) =>
    <CellMapper
      ids={ids}
      store={charatersStore}
      mapper={characterMapper}
      href={URL_CHARACTERS}
    />
));