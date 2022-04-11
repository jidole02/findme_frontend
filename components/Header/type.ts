import { ChangeEventHandler, MouseEventHandler } from "react";
import { person } from "../../interfaces/person";

export interface HeaderViewProps {
  addPerson: MouseEventHandler;
  moveMyLocation: MouseEventHandler;
  search: ChangeEventHandler;
  searchData: person[];
  x: number;
  y: number;
}
