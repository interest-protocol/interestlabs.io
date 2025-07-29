import { FC } from 'react';

import { SVGProps } from './svg.types';

const PrivateDrop: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12M2.458 15C3.00529 16.7387 4.01743 18.2948 5.385 19.5M8.5 21.37C9.59 21.777 10.769 22 12 22C13.231 22 14.41 21.777 15.5 21.37M18.615 19.5C19.9826 18.2948 20.9947 16.7387 21.542 15"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M16 13.5C16 14.5609 15.5786 15.5783 14.8284 16.3284C14.0783 17.0786 13.0609 17.5 12 17.5C10.9391 17.5 9.92172 17.0786 9.17157 16.3284C8.42143 15.5783 8 14.5609 8 13.5C8 11 12 6.5 12 6.5C12 6.5 16 11 16 13.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default PrivateDrop;
