import * as React from 'react';
import { IRouteDef, makeRendererList, makeRendererRecord, makeResourceRouter } from "..";
import { routeGetListUrl, routeGetRecordtUrl } from "../../../model/routes";
import { SpeciesList, SpeciesRecord } from '../../resources';


const listDef: IRouteDef = {
  renderer: makeRendererList((pageNumber: number) => <SpeciesList pageNumber={pageNumber} />),
  url: routeGetListUrl('species'),
}

const recordDef: IRouteDef = {
  renderer: makeRendererRecord(SpeciesRecord),
  url: routeGetRecordtUrl('species'),
}

export const SpeciesRouter = makeResourceRouter(listDef, recordDef);