import * as React from 'react';

import { TableCell } from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { MovieStore } from 'src/store';
import { SpecieStore } from 'src/store/SpecieStore';

export interface ICellItem {
  id: string, label: string
}

export interface ICellProps {
  items: ICellItem[]
}

export const Cell: React.SFC<ICellProps> = ({ items }: ICellProps) => (
  <TableCell >
    {
      items.map(i => i.label).join(', ')
    }
  </TableCell>
);

interface ICellMapperProps {
  ids: string[];
  store: MovieStore | SpecieStore
  mapper: (data: any) => ICellItem;
}

@observer
export class CellMapper extends React.Component<ICellMapperProps, {}> {
  public render() {
    return <Cell items={this.items} />
  }

  @computed
  private get items(): ICellItem[] {
    const { store, mapper, ids } = this.props;
    return ids
      .map(id => store.getById(id))
      .filter(c => c !== undefined)
      .map(mapper)
      .sort((i1, i2) => i1.label < i2.label ? -1 : 1);
  }
}
