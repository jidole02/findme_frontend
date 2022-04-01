import styled from "@emotion/styled";
import { HTMLInputTypeAttribute } from "react";
import { DesignSystem } from "./../../../interfaces/designSystem";

interface Props extends DesignSystem {
  event(event: any): void;
  pholder: string;
  isTextArea?: boolean;
  name?: string;
  type?: HTMLInputTypeAttribute;
}

export default function PersonalInput({
  event,
  pholder,
  isTextArea = false,
  css,
  name,
  type,
}: Props) {
  if (isTextArea)
    return (
      <TextArea
        placeholder={pholder}
        name={name}
        onChange={event}
        style={css}
      />
    );
  else
    return (
      <Input
        placeholder={pholder}
        name={name}
        onChange={event}
        style={css}
        type={type}
      />
    );
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
