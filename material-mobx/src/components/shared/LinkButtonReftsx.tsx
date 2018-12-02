import * as React from 'react';

import {
  createStyles,
  StyledComponentProps,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import { IResourceRef } from 'src/model';
import { LinkButton } from './routes/LinkButton';

const Style = (theme: Theme) => createStyles({
  button: {
    textTransform: 'none',
  },
});
type StyleProps = StyledComponentProps<"button">;

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