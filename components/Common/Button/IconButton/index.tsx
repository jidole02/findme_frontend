import { CSSProperties, ReactNode } from "react";
import { DesignSystem } from "../../../../interfaces/designSystem";

interface Props extends DesignSystem {
  children: ReactNode;
}

export default function IconButton({ css, children }: Props) {
  const property: CSSProperties = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "1px solid #DFDFDF",
    boxShadow: "0px 0px 10px rgb(0,0,0,0.1)",
  };
  return <button style={Object.assign(property, css)}>{children}</button>;
}
