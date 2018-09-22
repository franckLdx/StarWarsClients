import * as React from 'react';
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "../../routes";
import { List } from "./list";
import { Record } from "./record";

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <List pageNumber={pageNumber} />),
  url: routeGetListUrl('species'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(Record),
  url: routeGetRecordtUrl('species'),
}

export const SpeciesRouter = makeResourceRouter(listDef, recordDef);