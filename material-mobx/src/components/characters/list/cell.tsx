import * as React from 'react';

import {
  createStyles,
  List,
  ListItem,
  StyledComponentProps,
  TableCell,
  Theme,
  withStyles
} from '@material-ui/core';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { LinkButtonRef } from 'src/components/shared/LinkButtonRef';
import { IResourceRef } from 'src/model';
import { IResourceType, Store } from 'src/store/Store';

const Style = (theme: Theme) => createStyles({
  button: {
    textTransform: 'none',
  },
  item: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"item" | "button">;

export interface ICellItem {
  id: string, label: string
}

interface ICellOwnProps {
  items: ICellItem[]
  href: string
}
type ICellProps = ICellOwnProps & StyleProps;

const CellRaw: React.SFC<ICellProps> = ({ items, href, classes }: ICellProps) => (
  <TableCell >
    <List>
      {
        items.map(item => {
          return (
            <ListItem className={classes!.item} key={item.id}>
              <LinkButtonRef resourceRef={item} href={href} />
            </ListItem>
          );
        })
      }
    </List>
  </TableCell >
);
const Cell = withStyles(Style)(CellRaw);

export interface ICellRefProps {
  resourceRef: IResourceRef
}

interface ICellMapperProps<T extends IResourceType> {
  ids: string[];
  store: Store<T>
  mapper: (data: any) => ICellItem;
  href: string;
}

@observer
export class CellMapper<T extends IResourceType> extends React.Component<ICellMapperProps<T>, {}> {
  public render() {
    return <Cell items={this.items} href={this.props.href} />
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
