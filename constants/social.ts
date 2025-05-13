import { DiscordSVG, GithubSVG, TelegramSVG, XSVG } from '@/components/svg';
import RRPPageIcon from '@/components/svg/RRP';

import { Routes, RoutesEnum } from './routes';

export const SOCIAL = [
  {
    title: 'Discord',
    Icon: DiscordSVG,
    link: 'https://discord.com/invite/interestprotocol',
  },

  {
    title: 'X',
    Icon: XSVG,
    link: 'https://x.com/IPXLabs',
  },
  {
    title: 'Recovery and Resilience Plan',
    Icon: RRPPageIcon,
    link: Routes[RoutesEnum.Prr],
  },
  {
    title: 'Github',
    Icon: GithubSVG,
    link: 'https://github.com/interest-protocol',
  },
  {
    title: 'Telegram',
    Icon: TelegramSVG,
    link: 'https://t.me/interestprotocol',
  },
];
