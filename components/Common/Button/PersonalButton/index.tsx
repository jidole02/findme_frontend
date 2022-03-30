import styled from "@emotion/styled";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface Props {
  reverse?: boolean;
  event: MouseEventHandler;
  children: ReactNode;
  css?: CSSProperties;
}

export default function PersonalButton({
  reverse,
  event,
  children,
  css = {},
}: Props) {
  const property: CSSProperties = {
    color: reverse ? "#4d63ef" : "",
    backgroundColor: reverse ? "white" : "#4d63ef",
    border: reverse ? "1px solid #4d63ef" : "",
  };
  return (
    <Button
      style={Object.assign(property, css)}
      onClick={event}
      className="center"
    >
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--main-color);
`;
