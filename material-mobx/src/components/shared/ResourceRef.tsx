import * as React from 'react';

import {
  createStyles,
  List,
  ListItem,
  Paper,
  StyledComponentProps,
  TableCell,
  Theme,
  withStyles
} from '@material-ui/core';
import { IResourceRef } from 'src/model';
import { LinkButtonRef } from './LinkButtonReftsx';

const Style = (theme: Theme) => createStyles({
  item: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"item">;

export interface ICellOwnProps {
  resources: IResourceRef[],
  href: string
}
type ICellProps = ICellOwnProps & StyleProps;

const TableCellRefsRaw: React.SFC<ICellProps> = ({ resources, href, classes }: ICellProps) => (
  <TableCell >
    <List>
      {
        resources.map(resourceRef => {
          return (
            <ListItem className={classes!.item} key={resourceRef.id}>
              <LinkButtonRef resourceRef={resourceRef} href={href} />
            </ListItem>
          );
        })
      }
    </List>
  </TableCell >
);

export const TableCellRefs = withStyles(Style)(TableCellRefsRaw);

interface IListRefProps {
  resources: IResourceRef[];
  href: string;
}
export const ListRef: React.SFC<IListRefProps> = ({ resources, href }) => (
  <List>
    {
      resources.map(resource => (
        <ListItem key={resource.id}>
          <LinkButtonRef resourceRef={resource} href={href} />
        </ListItem>
      ))
    }
  </List >
);

interface IPaperRefProps {
  resources: IResourceRef[];
  href: string;
}
export const PaperRef: React.SFC<IPaperRefProps> = ({ resources, href }) => (
  <Paper>
    {
      resources.map(resource => (
        <LinkButtonRef key={resource.id} resourceRef={resource} href={href} />
      ))
    }
  </Paper >
);
