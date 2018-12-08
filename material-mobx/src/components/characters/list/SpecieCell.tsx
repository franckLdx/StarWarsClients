import * as React from 'react';

import { observer } from 'mobx-react';
import { URL_SPECIES } from 'src/components/Router';
import { IWithSpeciesStore, withSpecieStore } from 'src/store/injectors';
import { CellMapper } from './Cell';

interface ISpecieCellOwnProps {
  ids: string[]
};
type SpecieCellProps = IWithSpeciesStore & ISpecieCellOwnProps;

export const SpecieCell = observer(withSpecieStore(
  ({ ids, speciesStore }: SpecieCellProps) =>
    <CellMapper
      ids={ids}
      store={speciesStore}
      href={URL_SPECIES}
    />
));