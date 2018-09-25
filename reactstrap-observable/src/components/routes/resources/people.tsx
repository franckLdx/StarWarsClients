import * as React from 'react';
import { PeopleList } from '../../resources';
import { makeRendererList } from '../subResourceRouters';

export const PeopleRenderer = makeRendererList((pageNumber: number) => <PeopleList pageNumber={pageNumber} />);