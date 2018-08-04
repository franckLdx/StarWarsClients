import React from 'react';
import { Well, ProgressBar } from 'react-bootstrap';

export const Loading = (props) => (
  <Well className='Loading'>
    <ProgressBar className='Loading-progress' active label={'Loading...'} now={100} />
  </Well>
);
