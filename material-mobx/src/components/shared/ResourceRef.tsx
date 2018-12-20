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
import { cmpResourceName } from 'src/model';
import { IResourceType } from 'src/store/Store';
import { LinkButtonRef } from './linkButtonRef';

const Style = (theme: Theme) => createStyles({
  item: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"item">;

export interface ICellOwnProps {
  resources: IResourceType[],
  href: string
}
type ICellProps = ICellOwnProps & StyleProps;

const TableCellRefsRaw: React.SFC<ICellProps> = ({ resources, href, classes }: ICellProps) => (
  <TableCell >
    <List>
      {
        resources.slice().sort(cmpResourceName).map(resource => {
          return (
            <ListItem className={classes!.item} key={resource.id}>
              <LinkButtonRef className={classes!.item} resource={resource} href={href} />
            </ListItem>
          );
        })
      }
    </List>
  </TableCell >
);

export const TableCellRefs = withStyles(Style)(TableCellRefsRaw);

interface IListRefProps {
  resources: IResourceType[];
  href: string;
}
export const ListRef: React.SFC<IListRefProps> = ({ resources, href }) => (
  <List>
    {
      resources.slice().sort(cmpResourceName).map(resource => (
        <ListItem key={resource.id}>
          <LinkButtonRef resource={resource} href={href} />
        </ListItem>
      ))
    }
  </List >
);

interface IPaperRefProps {
  resources: IResourceType[];
  href: string;
}
export const ResourcePaper: React.SFC<IPaperRefProps> = ({ resources, href }) => (
  <Paper>
    {
      resources.slice().sort(cmpResourceName).map(resource => (
        <LinkButtonRef key={resource.id} resource={resource} href={href} />
      ))
    }
  </Paper >
);