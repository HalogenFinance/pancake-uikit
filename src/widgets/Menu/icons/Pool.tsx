import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="7" strokeWidth="2"></circle>
    </Svg>
  );
};

export default Icon;
