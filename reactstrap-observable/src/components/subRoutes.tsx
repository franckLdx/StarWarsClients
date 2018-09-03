import * as React from 'react';
import { mapHashToPageNumber, mapUrlToResource } from '../app/routes';
import { defaultPageNumber } from '../store';
import {
  PeopleList,
} from './peopleList';

export const PeopleRouter = (params: any) => {
  const { pathname, hash } = params.location;
  const resource = mapUrlToResource(pathname);
  const pageNumber = mapHashToPageNumber(hash) || defaultPageNumber;
  return <PeopleList pageNumber={pageNumber} />;
}