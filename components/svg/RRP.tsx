import { FC } from 'react';

import { SVGProps } from './svg.types';

const RRPPageIcon: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 40 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <pattern
        id="pattern0"
        patternUnits="userSpaceOnUse"
        width="106.199"
        height="37.8947"
      >
        <image href="img/prr.webp" width="106.199" height="37.8947" />
      </pattern>
    </defs>
    <rect
      x="0.669678"
      y="0.169678"
      width="106.199"
      height="37.8947"
      fill="url(#pattern0)"
    />
  </svg>
);

export default RRPPageIcon;
