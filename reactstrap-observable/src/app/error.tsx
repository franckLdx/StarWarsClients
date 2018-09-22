import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Alert from 'reactstrap/lib/Alert';

export const RouteError: React.SFC<RouteComponentProps<any>> = (params) =>
  <Alert>Wrong url: {JSON.stringify(params.location)}</Alert>
