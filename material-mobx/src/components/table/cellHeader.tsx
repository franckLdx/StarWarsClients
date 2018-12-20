import * as React from 'react';

import { TableCell, Typography } from '@material-ui/core';

interface ICellHeaderProps {
  header: string;
}
export const CellHeader: React.SFC<ICellHeaderProps> = ({ header }) =>
  (
    <TableCell>
      <Typography variant="subtitle1">
        {header}
      </Typography>
    </TableCell>
  );
