import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { PeopleList, PoepleRecord } from '../../resources';

const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <PeopleList pageNumber={pageNumber} />),
  url: routeGetListUrl('people'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(() => <PoepleRecord />),
  url: routeGetRecordtUrl('people'),
}

export const PeopleRouter = makeResourceRouter(listDef, recordDef);