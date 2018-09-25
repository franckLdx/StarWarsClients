import * as React from 'react';
import { makeRendererList } from "..";
import { StarshipsList } from '../../resources';

export const StarshipsRenderer = makeRendererList((pageNumber: number) => <StarshipsList pageNumber={pageNumber} />);