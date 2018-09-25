import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { FilmsList, FilmsRecord } from '../../resources';
import { makeResourceRouter } from '../resourceRouter';

const listDef: IRouteDef = {
  renderer: makeRendererList(
    (pageNumber: number) => <FilmsList pageNumber={pageNumber} />
  ),
  url: routeGetListUrl('films'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord((id: string) => <FilmsRecord id={id} />),
  url: routeGetRecordtUrl('films'),
}

export const FilmsRenderer = makeResourceRouter(listDef, recordDef);