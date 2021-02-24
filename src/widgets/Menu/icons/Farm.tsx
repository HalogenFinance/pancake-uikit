import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="15.334" cy="12" r="5" stroke="#15151F" stroke-dasharray="1 1" strokeWidth="1"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M10.714 6.465a5.9 5.9 0 100 11.07 7.043 7.043 0 01-1.422-1.482 4.1 4.1 0 110-8.105c.4-.562.879-1.061 1.422-1.483z" fill="#A1A1A5"></path><circle cx="15.333" cy="12" r="5" stroke="#A1A1A5" stroke-width="1.8"></circle>
    </Svg>
  );
};

export default Icon;
