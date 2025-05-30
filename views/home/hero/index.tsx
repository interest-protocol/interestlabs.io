import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import unikey from 'unikey';

import Header from '@/components/header';
import { ArrowDownSVG } from '@/components/svg';

import { PRODUCTS } from '../products/products.data';

const Arrow = (
  <Motion
    animate={{ y: ['0rem', '0.25rem', '0rem'] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'easeIn' }}
  >
    <ArrowDownSVG maxWidth="0.9rem" maxHeight="0.9rem" width="100%" />
  </Motion>
);

const Hero: FC = () => {
  const { push } = useRouter();

  return (
    <Header>
      <Box
        gap="8xl"
        display="flex"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          gap="m"
          display="flex"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            size="large"
            variant="display"
            color="onSurface"
            fontFamily="Satoshi"
          >
            <TypeAnimation
              cursor={true}
              wrapper="span"
              repeat={Infinity}
              preRenderFirstString
              sequence={[
                'Interest Labs',
                2000,
                '$IPX',
                2000,
                'Sui',
                2000,
                'Movement',
                2000,
              ]}
            />
          </Typography>
          <Typography
            px="s"
            size="small"
            fontSize="xl"
            variant="body"
            color="onSurface"
            lineHeight="150%"
            fontFamily="Satoshi"
          >
            Shaping the Future of Decentralized Finance
          </Typography>
          <Box display="flex" gap="s" mt="4xl">
            {PRODUCTS.map(({ Icon, id }) => (
              <Link href={`/#${id}`} key={unikey()}>
                {typeof Icon == 'string' ? (
                  <Box bg="#fff" width="3rem" height="3rem" borderRadius="100%">
                    <img
                      src={`${Icon}.webp`}
                      alt={id}
                      width="48px"
                      height="48px"
                    />
                  </Box>
                ) : (
                  <Icon width="100%" maxWidth="3rem" maxHeight="3rem" />
                )}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        gridColumn="1/-1"
        alignItems="flex-end"
        justifyContent="center"
      >
        <Button
          color="onSurface"
          cursor="pointer"
          variant="outline"
          borderRadius="xs"
          PrefixIcon={Arrow}
          SuffixIcon={Arrow}
          fontWeight="normal"
          fontFamily="Satoshi"
          onClick={() => push('/#about')}
        >
          Learn more
        </Button>
      </Box>
    </Header>
  );
};

export default Hero;
