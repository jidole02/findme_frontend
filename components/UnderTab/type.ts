import { person } from "./../../interfaces/person";

export interface UnderTabViewProps {
  selectDistance: number;
  setSelectDistance(p: number): void;
  data: person[];
}
