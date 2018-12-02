import * as React from 'react';

import { createStyles, List, ListItem, StyledComponentProps, TableCell, Theme, Typography, withStyles } from '@material-ui/core';
import { IResourceRef } from 'src/model';
import { LinkButton } from '../routes/LinkButton';

const Style = (theme: Theme) => createStyles({
  button: {
    textTransform: 'none',
  },
  item: {
    padding: '0px',
  },
});
type StyleProps = StyledComponentProps<"item" | "button">;

interface IResourcesRefOwnProps {
  resourceRef: IResourceRef;
  href: string;
}
type LinkButtonRefProps = IResourcesRefOwnProps & StyleProps;
const LinkButtonRefRaw: React.SFC<LinkButtonRefProps> = ({ resourceRef, href, classes }) => (
  < LinkButton className={classes!.button} href={`${href}/${resourceRef.id}`}>
    <Typography variant="subtitle1">{resourceRef.label}</Typography>
  </LinkButton >
);
export const LinkButtonRef = withStyles(Style)(LinkButtonRefRaw);

export interface ICellOwnProps {
  resourcesRef: IResourceRef[],
  href: string
}
type ICellProps = ICellOwnProps & StyleProps;

const TableCellRefsRaw: React.SFC<ICellProps> = ({ resourcesRef, href, classes }: ICellProps) => (
  <TableCell >
    <List>
      {
        resourcesRef.map(resourceRef => {
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
export const ResourcesList: React.SFC<IListRefProps> = ({ resources, href }) => (
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