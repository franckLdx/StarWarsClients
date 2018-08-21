import { IPeople } from "../../model/people";

export interface IPeopleState {
  status: Status;
  content: IPeople[];
}