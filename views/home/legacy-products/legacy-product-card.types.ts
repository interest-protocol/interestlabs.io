import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface Tag {
  title: string;
  Icon: FC<SVGProps>;
}

export interface LegacyProductCardProps {
  Icon: FC<SVGProps> | string;
  name: string;
  description: string;
  tags: ReadonlyArray<Tag>;
  year?: string;
  link: string;
  index: number;
}
