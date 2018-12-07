import * as React from 'react';

import {
  createStyles,
  StyledComponentProps,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import { IResourceType } from 'src/store/Store';
import { LinkButton } from './routes/LinkButton';

const Style = (theme: Theme) => createStyles({
  button: {
    textTransform: 'none',
  },
});
type StyleProps = StyledComponentProps<"button">;

interface IResourcesRefOwnProps {
  className?: string;
  resource: IResourceType;
  href: string;
}

type LinkButtonRefProps = IResourcesRefOwnProps & StyleProps;

const LinkButtonRefRaw: React.SFC<LinkButtonRefProps> = ({ resource, href, classes, className }) => (
  < LinkButton className={`${classes!.button} ${className}`} href={`${href}/${resource.id}`}>
    <Typography variant="subtitle1">{resource.name}</Typography>
  </LinkButton >
);

export const LinkButtonRef = withStyles(Style)(LinkButtonRefRaw);