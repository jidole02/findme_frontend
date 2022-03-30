import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";
import { DesignSystem } from "./../../../interfaces/designSystem";

interface Props extends DesignSystem {
  event: ChangeEventHandler;
  pholder: string;
  isTextArea?: boolean;
}

export default function PersonalInput({
  event,
  pholder,
  isTextArea = false,
  css,
}: Props) {
  if (isTextArea)
    return <TextArea placeholder={pholder} onChange={event} style={css} />;
  else return <Input placeholder={pholder} onChange={event} style={css} />;
}

const Input = styled.input`
  border: 1px solid #a5a5a5;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  color: #aaaaaa;
  font-weight: 400;
  outline: none;
  transition: 0.3s;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    color: var(--main-color);
    border: 1px solid var(--main-color);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #a5a5a5;
  width: 100%;
  height: 130px;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  color: #aaaaaa;
  font-weight: 400;
  outline: none;
  transition: 0.3s;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    color: var(--main-color);
    border: 1px solid var(--main-color);
  }
`;
