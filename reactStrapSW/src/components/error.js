import React from 'react';
import { Alert } from 'react-bootstrap';

export const ErrorComponent = () => (
  <Alert bsStyle="warning">
    Sorry, I've got an error. Please restart the server and try again
  </Alert>
);