import * as React from 'react';

import { makeRendererList, } from "..";
import { PlanetsList } from '../../resources';

export const PlanetsRenderer = makeRendererList((pageNumber: number) => <PlanetsList pageNumber={pageNumber} />);