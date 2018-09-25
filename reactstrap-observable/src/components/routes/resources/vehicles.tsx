import * as React from 'react';
import { makeRendererList } from "..";
import { VehiclesList } from '../../resources';

export const VehiclesRenderer = makeRendererList((pageNumber: number) => <VehiclesList pageNumber={pageNumber} />);