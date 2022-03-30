import { DesignSystem } from "./../../../interfaces/designSystem";
import { CSSProperties } from "react";

interface Props extends DesignSystem {
  size?: "large" | "small";
  src: string;
}

export default function PersonalImage({ size = "large", src, css }: Props) {
  const property: CSSProperties = {
    width: size === "large" ? "120px" : "50px",
    height: size === "large" ? "120px" : "50px",
    borderRadius: "50%",
    border: "1px solid #f5f5f5",
    objectFit: "cover",
  };
  return <img src={src} style={Object.assign(property, css)} />;
}
