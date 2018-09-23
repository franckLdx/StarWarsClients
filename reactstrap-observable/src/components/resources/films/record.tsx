import * as React from 'react';
import { Button } from 'reactstrap';
import { IRecordProps } from '../../routes';

export const FilmsRecord: React.StatelessComponent<IRecordProps> =
  ({ id }: IRecordProps) => {
    return (<>
      {id}
      <Button>HELLO Film</Button>
    </>);
  }
