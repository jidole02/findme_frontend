import { MouseEventHandler } from "react";
import { person } from "./../../../interfaces/person";

export interface PersonDetailProps {
  person: person;
  successFind: MouseEventHandler;
}
