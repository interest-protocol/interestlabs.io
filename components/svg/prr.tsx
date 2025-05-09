import { FC } from 'react';

import { SVGProps } from './svg.types';

const Prrr: FC<SVGProps> = ({ maxWidth, maxHeight }) => (
  <img style={{ maxWidth, maxHeight }} src="/img/prr.png" alt="logo" />
);

export default Prrr;
