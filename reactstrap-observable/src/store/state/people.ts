import { IPeople } from "../../model/people";

export interface IPeopleState {
  status: LoadingStatus;
  content: IPeople[];
}