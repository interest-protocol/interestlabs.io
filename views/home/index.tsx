import { FC } from 'react';

import { Footer } from '@/components';

import About from './about';
import Hero from './hero';
import LegacyProducts from './legacy-products';
import Partners from './partners';
import Products from './products';

const Home: FC = () => (
  <>
    <Hero />
    <About />
    <Products />
    <LegacyProducts />
    <Partners />
    <Footer />
  </>
);

export default Home;
