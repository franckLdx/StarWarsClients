import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { mapHashToPageNumber } from './tools';

export type ListRenderProps = (pageNumber: number) => React.ReactNode;

export const makeRendererList = (listRenderProps: ListRenderProps) =>
  (routeProps: RouteComponentProps<any>) => {
    const hash = routeProps.location.hash;
    if (!hash) {
      return <Redirect to={`${routeProps.location.pathname}#page=1`} />
    }
    const pageNumber = mapHashToPageNumber(hash);
    return listRenderProps(pageNumber);
  }

export type RecordRenderProps = (id: string) => React.ReactNode;

export const makeRendererRecord = (recordRenderProps: RecordRenderProps) =>
  (routeProps: RouteComponentProps<any>) =>
    recordRenderProps(routeProps.match.params.id);
