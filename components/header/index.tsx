import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Social from '../social';
import { LogoSVG } from '../svg';

const Headerr: FC = () => {
  return (
    <Box position="relative">
      <Box
        p="xl"
        zIndex="1"
        display="grid"
        height="30vh"
        position="relative"
        gridTemplateRows="7rem auto 7rem"
        gridTemplateColumns="7rem auto 7rem"
      >
        <LogoSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
        <Box />
        <Social dark />
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

export default Headerr;
