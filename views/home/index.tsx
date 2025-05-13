import { FC } from 'react';

import { Footer } from '@/components';

import About from './about';
import Hero from './hero';
import Partners from './partners';
import Products from './products';

const Home: FC = () => (
  <>
    <Hero />
    <About />
    <Products />
    <Partners />
    <Footer />
  </>
);

export default Home;
