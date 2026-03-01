import {
  AirdropSVG,
  BlastSVG,
  BookSVG,
  CogSVG,
  CoinSVG,
  DAOSVG,
  DifferenceSVG,
  GiftSVG,
  IPXMovementSVG,
  LockSVG,
  PieChartSVG,
  PlusSVG,
  PrivacySVG,
  PrivateDropSVG,
  PythSVG,
  ResistanceSVG,
  RocketSVG,
  SecureFolderSVG,
  ShieldSVG,
  SnowSVG,
  SparklesSVG,
  SuiCoinsSVG,
  SuiTearsSVG,
  SwapSVG,
  VirtualDropSVG,
  VortexSVG,
  WalletSVG,
  WaveSVG,
} from '@/components/svg';

import { ProductCardProps } from './product-card/product-card.types';

export const PRODUCTS: ReadonlyArray<Omit<ProductCardProps, 'index'>> = [
  {
    id: 'blast',
    Icon: BlastSVG,
    name: 'Blast.fun',
    description:
      'Blast.fun is a Web3 memecoin launchpad and discovery platform where users create and explore tokens directly on-chain.',
    link: 'https://www.blast.fun/',
    image: '/img/blast-fun',
    network: 'SUI',
    tags: [
      {
        title: 'Launchpad',
        Icon: RocketSVG,
      },
      {
        title: 'Rewards',
        Icon: GiftSVG,
      },
      {
        title: 'Portfolio',
        Icon: PieChartSVG,
      },
      {
        title: 'Token Creation',
        Icon: SparklesSVG,
      },
    ],
  },
  {
    id: 'vortex',
    Icon: VortexSVG,
    name: 'Vortex',
    description:
      'Private DeFi protocol on the Sui blockchain, focused on confidential transactions and privacy-preserving asset management using zero-knowledge proofs.',
    link: 'https://www.vortexfi.xyz/',
    image: '/img/vortex',
    network: 'SUI',
    tags: [
      {
        title: 'Private Wallets',
        Icon: WalletSVG,
      },
      {
        title: 'On-chain Privacy',
        Icon: ShieldSVG,
      },
      {
        title: 'Confidential Transactions',
        Icon: LockSVG,
      },
      {
        title: 'Privacy-Preserving',
        Icon: PrivacySVG,
      },
      {
        title: 'Secure Asset Management',
        Icon: SecureFolderSVG,
      },
    ],
  },
  {
    id: 'walrus',
    Icon: SnowSVG,
    name: 'Winter Walrus',
    description:
      'Welcome to the land of coins endless possibilities—your one-stop shop to explore, trade, discover, create and edit coins.',
    link: 'https://www.winterwalrus.com/',
    image: '/img/winter-walrus',
    network: 'SUI',
    tags: [
      {
        title: 'LST',
        Icon: PlusSVG,
      },
      {
        title: 'Stake',
        Icon: RocketSVG,
      },
      {
        title: 'Walrus',
        Icon: DifferenceSVG,
      },
    ],
    year: '2025',
  },
  {
    id: 'movement',
    Icon: IPXMovementSVG,
    name: 'Interest DEX',
    description:
      'Explore all the tooling available on SuiCoins, but in a different blockchain.',
    link: 'https://github.com/interest-protocol/interestprotocol.com',
    image: '/img/movement',
    network: 'M2',
    tags: [
      {
        title: 'DEX',
        Icon: SwapSVG,
      },
      {
        title: 'Airdrop',
        Icon: AirdropSVG,
      },
      {
        title: 'Create Coins',
        Icon: PlusSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'suicoins',
    Icon: SuiCoinsSVG,
    name: 'Suicoins',
    description:
      'Effortless coin minting and distribution; swapping and liquidity management.',
    link: 'https://suicoins.com',
    image: '/img/sui-coins',
    network: 'SUI',
    tags: [
      {
        title: 'DEX',
        Icon: SwapSVG,
      },
      {
        title: 'Airdrop',
        Icon: AirdropSVG,
      },
      {
        title: 'Create Coins',
        Icon: PlusSVG,
      },
    ],
  },
  {
    id: 'tide',
    Icon: WaveSVG,
    name: 'Tide Private AMM',
    description:
      'Private liquidity AMM designed to provide the best swap rates for users.',
    link: 'https://suiscan.xyz/mainnet/directory/Tide',
    image: '/img/tide',
    network: 'SUI',
    tags: [
      {
        title: 'MEV Resistance  ',
        Icon: ResistanceSVG,
      },
      {
        title: 'Pyth Oracle',
        Icon: PythSVG,
      },
      {
        title: 'Private Liquidity',
        Icon: PrivateDropSVG,
      },
      {
        title: 'Virtual Liquidity',
        Icon: VirtualDropSVG,
      },
    ],
    year: '2025',
    isLegacy: true,
  },
  {
    id: 'memez',
    Icon: '/img/memez-head',
    name: 'Memez.GG',
    description:
      'Welcome to the land of coins endless possibilities—your one-stop shop to explore, trade, discover, create and edit coins.',
    link: 'https://www.winterwalrus.com/',
    image: '/img/winter-walrus',
    network: 'SUI',
    tags: [
      {
        title: 'LST',
        Icon: PlusSVG,
      },
      {
        title: 'Stake',
        Icon: RocketSVG,
      },
      {
        title: 'Walrus',
        Icon: DifferenceSVG,
      },
    ],
    year: '2025',
    isLegacy: true,
  },
  {
    id: 'movement',
    Icon: IPXMovementSVG,
    name: 'Interest DEX',
    description:
      'Explore all the tooling available on SuiCoins, but in a different blockchain.',
    link: 'https://interest.xyz',
    image: '/img/movement',
    network: 'M2',
    tags: [
      {
        title: 'DEX',
        Icon: SwapSVG,
      },
      {
        title: 'Airdrop',
        Icon: AirdropSVG,
      },
      {
        title: 'Create Coins',
        Icon: PlusSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'suprotocol',
    Icon: SuiTearsSVG,
    name: 'Su Protocol',
    description:
      'Mint synthetic tokens on Su Protocol in a simple and secure way, with real-time tracking of collateral, fees, and slippage directly in the interface.',
    link: '#',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Swap',
        Icon: DAOSVG,
      },
      {
        title: 'Mint',
        Icon: BookSVG,
      },
      {
        title: 'Collateral',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'suiterminal',
    Icon: SuiCoinsSVG,
    name: 'SuiCoins Terminal',
    description:
      'SuiCoins Terminal is an open-source, lightweight version of SuiCoins Swap feature, designed to provide a seamless end-to-end swap flow solution. It can be easily integrated into your Website, enabling smooth swaps across platforms.',
    link: '#',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Integrated',
        Icon: DAOSVG,
      },
      {
        title: 'Simple',
        Icon: BookSVG,
      },
      {
        title: 'Open-source',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'incinerator',
    Icon: SuiCoinsSVG,
    name: 'incinerator',
    description: 'Burn your assets and keep your wallet clean',
    link: '',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Burn',
        Icon: DAOSVG,
      },
      {
        title: 'Clean',
        Icon: BookSVG,
      },
      {
        title: 'user-friendly',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'tide',
    Icon: WaveSVG,
    name: 'Tide Private AMM',
    description:
      'Private liquidity AMM designed to provide the best swap rates for users.',
    link: 'https://suiscan.xyz/mainnet/directory/Tide',
    image: '/img/tide',
    network: 'SUI',
    tags: [
      {
        title: 'MEV Resistance  ',
        Icon: ResistanceSVG,
      },
      {
        title: 'Pyth Oracle',
        Icon: PythSVG,
      },
      {
        title: 'Private Liquidity',
        Icon: PrivateDropSVG,
      },
      {
        title: 'Virtual Liquidity',
        Icon: VirtualDropSVG,
      },
    ],
    year: '2025',
    isLegacy: true,
  },
  {
    id: 'memez',
    Icon: '/img/memez-head',
    name: 'Memez.GG',
    description:
      'Welcome to the land of coins endless possibilities—your one-stop shop to explore, trade, discover, create and edit coins.',
    link: 'https://coins.memez.gg/',
    image: '/img/coins-memez',
    network: 'SUI',
    tags: [
      {
        title: 'Create Coin',
        Icon: PlusSVG,
      },
      {
        title: 'Launchpad',
        Icon: RocketSVG,
      },
      {
        title: 'Swap',
        Icon: DifferenceSVG,
      },
    ],
    year: '2025',
    isLegacy: true,
  },
  {
    id: 'suitears',
    Icon: SuiTearsSVG,
    name: 'Suitears',
    description: 'Ready-to-use suite of smart contracts. Learn from the best.',
    link: 'https://suitears.com',
    image: '/img/suitears',
    network: 'SUI',
    tags: [
      {
        title: 'DAO',
        Icon: DAOSVG,
      },
      {
        title: 'Math Library',
        Icon: BookSVG,
      },
      {
        title: 'Capabilities',
        Icon: CogSVG,
      },
      {
        title: 'Utilities',
        Icon: CoinSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'suprotocol',
    Icon: SuiTearsSVG,
    name: 'Su Protocol',
    description:
      'Mint synthetic tokens on Su Protocol in a simple and secure way, with real-time tracking of collateral, fees, and slippage directly in the interface.',
    link: '#',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Swap',
        Icon: DAOSVG,
      },
      {
        title: 'Mint',
        Icon: BookSVG,
      },
      {
        title: 'Collateral',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'suiterminal',
    Icon: SuiCoinsSVG,
    name: 'SuiCoins Terminal',
    description:
      'SuiCoins Terminal is an open-source, lightweight version of SuiCoins Swap feature, designed to provide a seamless end-to-end swap flow solution. It can be easily integrated into your Website, enabling smooth swaps across platforms.',
    link: '#',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Integrated',
        Icon: DAOSVG,
      },
      {
        title: 'Simple',
        Icon: BookSVG,
      },
      {
        title: 'Open-source',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
  {
    id: 'incinerator',
    Icon: SuiCoinsSVG,
    name: 'incinerator',
    description: 'Burn your assets and keep your wallet clean',
    link: '',
    image: '',
    network: 'SUI',
    tags: [
      {
        title: 'Burn',
        Icon: DAOSVG,
      },
      {
        title: 'Clean',
        Icon: BookSVG,
      },
      {
        title: 'user-friendly',
        Icon: CogSVG,
      },
    ],
    year: '2024',
    isLegacy: true,
  },
];
