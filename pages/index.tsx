import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';

import Home from '@/views/home';

const HomePage: NextPage = () => (
  <Box as="main">
    <Home />
  </Box>
);

export default HomePage;
