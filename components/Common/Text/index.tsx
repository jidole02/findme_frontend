import { DesignSystem } from "./../../../interfaces/designSystem";
import { ReactNode, CSSProperties } from "react";

interface Props extends DesignSystem {
  children: ReactNode;
  weight?: "bold" | "medium" | "reguler";
  size?: "large" | "small";
  color?: "black" | "#AAAAAA" | "#3184FF";
}

export default function PersonalText({
  children,
  css,
  weight = "medium",
  size = "large",
  color = "black",
}: Props) {
  const property: CSSProperties = {
    fontWeight: weight === "bold" ? 600 : weight === "medium" ? 500 : 400,
    fontSize: size === "large" ? "16px" : "12px",
    color: color,
  };
  return <div style={Object.assign(property, css)}>{children}</div>;
}
