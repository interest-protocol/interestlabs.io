import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { StarBackground } from '..';
import Social from '../social';
import { StarBackgroundProps } from '../star-background/star-background.types';
import { LogoSVG } from '../svg';

const Header: FC<PropsWithChildren<StarBackgroundProps>> = ({
  isPRR,
  children,
  withoutBall,
  numberOfParticles,
}) => {
  return (
    <Box position="relative">
      <StarBackground
        withoutBall={withoutBall}
        numberOfParticles={numberOfParticles}
      />
      <Box
        p="xl"
        zIndex="1"
        display="grid"
        position="relative"
        height={isPRR ? 'unset' : '100vh'}
        gridTemplateColumns="7rem auto 12rem"
        gridTemplateRows={isPRR ? 'unset' : '7rem auto 7rem'}
      >
        <a href="/">
          <LogoSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
        </a>
        <Box />
        <Box>
          <Social dark />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Header;
