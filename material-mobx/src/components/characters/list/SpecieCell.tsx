import * as React from 'react';

import { observer } from 'mobx-react';
import { ISpecie } from "src/model";
import { IWithSpecieStore, withSPecieStore } from 'src/store/injectors';
import { CellMapper } from './cell';

interface ISpecieCellOwnProps {
  ids: string[]
};
type SpecieCellProps = IWithSpecieStore & ISpecieCellOwnProps;

const specieMapper = (specie: ISpecie) => ({ id: specie.id, label: specie.name });

export const SpecieCell = observer(withSPecieStore(
  ({ ids, specieStore }: SpecieCellProps) =>
    <CellMapper
      ids={ids}
      store={specieStore}
      mapper={specieMapper}
    />
));