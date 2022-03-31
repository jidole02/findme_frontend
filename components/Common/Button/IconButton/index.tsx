import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { DesignSystem } from "../../../../interfaces/designSystem";

interface Props extends DesignSystem {
  children: ReactNode;
  event: MouseEventHandler;
}

export default function IconButton({ css, children, event }: Props) {
  const property: CSSProperties = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "1px solid #DFDFDF",
    background: "white",
    boxShadow: "0px 0px 10px rgb(0,0,0,0.1)",
  };
  return (
    <button
      className="center"
      style={Object.assign(property, css)}
      onClick={event}
    >
      {children}
    </button>
  );
}
