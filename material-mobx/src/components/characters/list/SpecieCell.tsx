import * as React from 'react';

import { observer } from 'mobx-react';
import { ISpecie } from "src/model";
import { IWithSpeciesStore, withSPecieStore } from 'src/store/injectors';
import { CellMapper } from './cell';

interface ISpecieCellOwnProps {
  ids: string[]
};
type SpecieCellProps = IWithSpeciesStore & ISpecieCellOwnProps;

const specieMapper = (specie: ISpecie) => ({ id: specie.id, label: specie.name });

export const SpecieCell = observer(withSPecieStore(
  ({ ids, speciesStore }: SpecieCellProps) =>
    <CellMapper
      ids={ids}
      store={speciesStore}
      mapper={specieMapper}
    />
));