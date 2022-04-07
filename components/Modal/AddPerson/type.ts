import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";

export interface AddPersonViewProps {
  handleInput: FormEventHandler;
  fileName: string;
  subData: MouseEventHandler;
  getFile: ChangeEventHandler;
}
