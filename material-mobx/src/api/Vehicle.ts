import { IResourceRef } from 'src/model';
import { IVehicle } from 'src/model/Vehicle';
import { mapToRef } from './Tools';

export const mapVehicleToRef: (s: IVehicle) => IResourceRef = mapToRef;
