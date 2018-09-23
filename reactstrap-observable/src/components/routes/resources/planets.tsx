import * as React from 'react';
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";

import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { PlanetsList, PlanetsRecord } from '../../resources';

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <PlanetsList pageNumber={pageNumber} />),
  url: routeGetListUrl('planets'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(() => <PlanetsRecord />),
  url: routeGetRecordtUrl('planets'),
}

export const PlanetsRouter = makeResourceRouter(listDef, recordDef);