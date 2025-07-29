import { FC } from 'react';

import { SVGProps } from './svg.types';

const VirtualDrop: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M13 2H11V4H9V8H7V12H5V18H7V20H9V22H15V20H17V18H19V12H17V8H15V4H13V2ZM13 4V8H15V12H17V18H15V20H9V18H7V12H9V8H11V4H13Z"
      fill="currentColor"
    />
  </svg>
);

export default VirtualDrop;
