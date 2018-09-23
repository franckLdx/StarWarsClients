import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { FilmsList, FilmsRecord } from '../../resources';

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

export const FilmsRouter = makeResourceRouter(listDef, recordDef);