import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Social from '../social';
import { LogoSVG } from '../svg';

const Header: FC = () => {
  return (
    <Box position="relative">
      <Box
        p="xl"
        zIndex="1"
        display="grid"
        height="30vh"
        position="relative"
        gridTemplateRows="repeat(3, 1fr)"
        gridTemplateColumns="7rem auto 7rem"
        marginRight="60px"
      >
        <LogoSVG maxHeight="3.5rem" maxWidth="3.5rem" width="100%" />
        <Box />
        <Social dark />
        <Box
          gap="4xl"
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
          ></Box>
        </Box>
        <Box
          display="flex"
          gridColumn="1/-1"
          alignItems="flex-end"
          justifyContent="center"
        ></Box>
      </Box>
    </Box>
  );
};

export default Header;
