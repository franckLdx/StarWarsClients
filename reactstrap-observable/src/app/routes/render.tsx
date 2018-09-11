import * as React from 'react';
import { defaultPageNumber } from "../../store";
import { mapHashToPageNumber } from "./tools";

export interface IWithPageNumber { pageNumber: number }

export const makeRenderPageComponent = (Component: React.ComponentType<IWithPageNumber>) => {
  return (params: any) => {
    const { hash } = params.location;
    const pageNumber = mapHashToPageNumber(hash) || defaultPageNumber;
    return <Component pageNumber={pageNumber} />;
  }
}