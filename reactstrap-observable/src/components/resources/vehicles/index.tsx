import * as React from 'react';
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "../../routes";
import { List } from "./list";
import { Record } from "./record";

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <List pageNumber={pageNumber} />),
  url: routeGetListUrl('vehicles'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(Record),
  url: routeGetRecordtUrl('vehicles'),
}

export const VehiclesRouter = makeResourceRouter(listDef, recordDef);