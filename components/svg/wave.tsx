import { FC } from 'react';

import { SVGProps } from './svg.types';

const Wave: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5Z"
      fill="white"
    />
    <path
      d="M7 9.67475C8.138 8.20975 11.568 5.82475 15.25 7.67475C10.606 7.55475 10.61 13.1747 15.75 13.1747C17.53 13.1747 18.707 12.7447 19.478 12.2107M19.5 15.4218C19.086 15.6968 17.845 16.2488 16.19 16.2488C14.12 16.2488 12.804 14.5937 10.322 14.5937C8.336 14.5937 7.622 15.2798 7 15.7488M19.5 18.0938C19.086 18.3697 17.845 18.9218 16.19 18.9218C13.1 18.9218 12.795 17.2657 10.232 17.2657C8.609 17.2657 7.732 17.9558 7.272 18.5468"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Wave;
