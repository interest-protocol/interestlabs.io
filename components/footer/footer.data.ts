import { Routes, RoutesEnum } from '@/constants/routes';
import { PartnersImage } from '@/views/home/partners/partners.types';

export const FOOTER_IMAGES: ReadonlyArray<PartnersImage> = [
  {
    image: '/img/stamp.webp',
    label: 'Portugal Stamp',
    url: Routes[RoutesEnum.Prr],
  },
];
