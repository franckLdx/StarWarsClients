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
import { cmpResourceName } from 'src/model';
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
  resources: IResourceType[]
  href: string
}
type ICellProps = ICellOwnProps & StyleProps;

const CellRaw: React.SFC<ICellProps> = ({ resources, href, classes }: ICellProps) => (
  <TableCell >
    <List>
      {
        resources.map(resource => {
          return (
            <ListItem className={classes!.item} key={resource.id}>
              <LinkButtonRef resource={resource} href={href} />
            </ListItem>
          );
        })
      }
    </List>
  </TableCell >
);
const Cell = withStyles(Style)(CellRaw);

export interface ICellRefProps {
  resourceRef: IResourceType
}

interface ICellMapperProps<T extends IResourceType> {
  ids: string[];
  store: Store<T>
  href: string;
}

@observer
export class CellMapper<T extends IResourceType> extends React.Component<ICellMapperProps<T>, {}> {
  public render() {
    return <Cell resources={this.resources} href={this.props.href} />
  }

  @computed
  private get resources(): IResourceType[] {
    const { store, ids } = this.props;
    return ids
      .map(id => store.getById(id))
      .filter(c => c !== undefined)
      .map(c => c!)
      .sort(cmpResourceName);
  }
}
