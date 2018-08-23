import { ResourcesType } from "../../model";
import { IAppState } from "../state";

export const getResource = (state: IAppState, resource: ResourcesType) => state[resource]

export const getResourceStatus = (state: IAppState, resource: ResourcesType) => state[resource].status as LoadingStatus

export const canLoad = (state: IAppState, resource: ResourcesType) => getResourceStatus(state, resource) === 'NOT_LOADED'
