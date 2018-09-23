import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { StarshipsList, StarshipsRecord } from '../../resources';

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <StarshipsList pageNumber={pageNumber} />),
  url: routeGetListUrl('starships'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(() => <StarshipsRecord />),
  url: routeGetRecordtUrl('starships'),
}

export const StarshipsRouter = makeResourceRouter(listDef, recordDef);