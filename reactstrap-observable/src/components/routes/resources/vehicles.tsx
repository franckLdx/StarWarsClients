import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { VehiclesList, VehiclesRecord } from '../../resources';

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <VehiclesList pageNumber={pageNumber} />),
  url: routeGetListUrl('vehicles'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(() => <VehiclesRecord />),
  url: routeGetRecordtUrl('vehicles'),
}

export const VehiclesRouter = makeResourceRouter(listDef, recordDef);