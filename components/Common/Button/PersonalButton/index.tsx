import styled from "@emotion/styled";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { DesignSystem } from "./../../../../interfaces/designSystem";

interface Props extends DesignSystem {
  reverse?: boolean;
  event: MouseEventHandler;
  children: ReactNode;
}

export default function PersonalButton({
  reverse,
  event,
  children,
  css,
}: Props) {
  const property: CSSProperties = {
    color: reverse ? "#4d63ef" : "",
    backgroundColor: reverse ? "white" : "#4d63ef",
    border: reverse ? "1px solid #4d63ef" : "",
    marginTop: reverse ? "10px" : "0",
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
