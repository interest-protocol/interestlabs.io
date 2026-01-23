import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useMemo } from 'react';

import { PRODUCTS } from '../products/products.data';
import LegacyProductCard from './legacy-product-card';

const LegacyProducts: FC = () => {
  const legacyProducts = useMemo(
    () => PRODUCTS.filter((product) => product.isLegacy),
    []
  );

  return (
    <Box py="8xl" px="xl" bg="#000000">
      <Box maxWidth="1440px" mx="auto">
        <Typography
          pb="8xl"
          size="large"
          variant="title"
          fontWeight="700"
          color="onSurface"
          lineHeight="100%"
          fontSize={['2.25rem', '2.25rem', '3.5rem']}
        >
          Old Products
        </Typography>
        <Box
          gap="12px"
          display="grid"
          gridTemplateColumns={[
            '1fr',
            '1fr',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gridAutoRows="auto"
          mb="40px"
          alignItems="stretch"
        >
          {legacyProducts.map((product, index) => (
            <Box
              key={product.id}
              gridColumn={['span 1', 'span 1', 'span 2', 'span 2']}
              gridRow={['span 1', 'span 1', 'span 2', 'span 2']}
              display="flex"
              minHeight="0"
              height="100%"
            >
              <LegacyProductCard
                Icon={product.Icon}
                name={product.name}
                link={product.link}
                description={product.description}
                tags={product.tags}
                year={product.year}
                index={index}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LegacyProducts;
