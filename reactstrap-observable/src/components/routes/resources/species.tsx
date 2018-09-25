import * as React from 'react';
import { makeRendererList } from "..";
import { SpeciesList, } from '../../resources';

export const SpeciesRouter = makeRendererList((pageNumber: number) => <SpeciesList pageNumber={pageNumber} />);