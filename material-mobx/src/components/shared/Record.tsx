import * as React from 'react';

import {
  createStyles,
  Paper,
  StyledComponentProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const Style = (theme: Theme) => createStyles({
  record: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: theme.spacing.unit,
  },
});

type TitleStyleProps = StyledComponentProps<"title">;
interface IOwnProps { children: React.ReactNode };


type RecordStyleProps = StyledComponentProps<"record">;
const RecordRaw: React.SFC<IOwnProps & RecordStyleProps> = ({ classes, children }) => (
  <Paper className={classes!.record}>{children}</Paper>
);
export const Record = withStyles(Style)(RecordRaw);


const H1Raw: React.SFC<IOwnProps & TitleStyleProps> = ({ classes, children }) => (
  <Typography className={classes!.title} variant="h5">{children}</Typography>
);
export const RecordH1 = withStyles(Style)(H1Raw);


const H2Raw: React.SFC<IOwnProps & TitleStyleProps> = ({ classes, children }) => (
  <Typography className={classes!.title} variant="subtitle1">{children}</Typography>
);
export const RecordH2 = withStyles(Style)(H2Raw);


export const RecordInfo: React.SFC<IOwnProps> = ({ children }) => (
  <Typography variant="subtitle1">{children}</Typography>
);
