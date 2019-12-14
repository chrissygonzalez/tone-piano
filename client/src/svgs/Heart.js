import React from "react";

const SvgHeart = props => (
  <svg
    width={24}
    height={24}
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0.838 24 22.31"
    {...props}
  >
    <path
      d="M17.726 1.01c-2.203 0-4.446 1.042-5.726 3.238C10.715 2.042 8.478 1 6.281 1 3.098 1 0 3.187 0 7.191 0 11.852 5.571 16.62 12 23c6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
      fill={props.color}
    />
  </svg>
);

export default SvgHeart;