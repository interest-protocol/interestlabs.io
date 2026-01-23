'use client';

import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LegacyProductCardProps } from './legacy-product-card.types';

const ANIMATION_DELAY_MULTIPLIER = 0.05;
const HOVER_TRANSITION_DURATION = 0.5;
const FADE_IN_DURATION = 0.8;
const HOVER_EASING = [0.25, 0.1, 0.25, 1] as const;

const LegacyProductCard: FC<LegacyProductCardProps> = ({
  Icon,
  name,
  description,
  tags,
  year,
  link,
  index,
}) => {
  const animationDelay = ANIMATION_DELAY_MULTIPLIER * (index + 1);
  const gotoProduct = () => window.open(link, '_blank', 'noreferrer');

  return (
    <Motion
      p={['28px', '28px', '36px']}
      overflow="hidden"
      borderRadius="12px"
      position="relative"
      border="1px solid"
      cursor="pointer"
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      bg="#0a0a0a"
      borderColor="#1a1a1a"
      role="article"
      aria-label={`${name} - ${description}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        backgroundColor: '#0d0d0d',
        borderColor: '#262626',
      }}
      transition={{
        backgroundColor: {
          duration: HOVER_TRANSITION_DURATION,
          ease: HOVER_EASING,
        },
        borderColor: {
          duration: HOVER_TRANSITION_DURATION,
          ease: HOVER_EASING,
        },
        opacity: {
          duration: FADE_IN_DURATION,
          ease: 'easeOut',
          delay: animationDelay,
        },
      }}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
    >
      <Motion
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="radial-gradient(circle at top right, rgba(255, 255, 255, 0.02), transparent 60%)"
        pointerEvents="none"
        zIndex="1"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{
          opacity: {
            duration: HOVER_TRANSITION_DURATION,
            ease: HOVER_EASING,
          },
        }}
      />
      <Box
        position="relative"
        zIndex="2"
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <Box
          mb={'20px'}
          filter="grayscale(30%)"
          display="inline-block"
          opacity="0.9"
          flexShrink="0"
          fontSize="2.2rem"
          lineHeight="1"
        >
          {typeof Icon === 'string' ? (
            <Box bg="#fff" width="3.5rem" height="3.5rem" borderRadius="100%">
              <img src={`${Icon}.webp`} alt={name} width="56px" height="56px" />
            </Box>
          ) : (
            <Icon maxWidth="3.5rem" maxHeight="3.5rem" width="100%" />
          )}
        </Box>
        <Typography
          variant="body"
          size="medium"
          fontSize={'1.4rem'}
          fontWeight="500"
          color="#ffffff"
          mb={'14px'}
          letterSpacing="-0.02em"
          flexShrink="0"
        >
          {name}
        </Typography>

        <Box
          mb="24px"
          overflow="hidden"
          flexShrink="0"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >
          <Typography
            size="medium"
            variant="body"
            fontSize={'0.95rem'}
            fontWeight="300"
            lineHeight={'1.7'}
            color="#666666"
          >
            {description}
          </Typography>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap="8px"
          marginBottom="20px"
          flexShrink="0"
        >
          {tags.map((tag) => (
            <Motion
              key={tag.title}
              as="span"
              borderRadius="6px"
              border="1px solid"
              padding="6px 14px"
              fontSize="0.75rem"
              fontWeight="400"
              letterSpacing="0.02em"
              color="#808080"
              display="inline-block"
              bg="#141414"
              borderColor="#1f1f1f"
              whileHover={{
                borderColor: '#262626',
                backgroundColor: '#1a1a1a',
              }}
              transition={{
                borderColor: {
                  duration: 0.4,
                  ease: HOVER_EASING,
                },
                backgroundColor: {
                  duration: 0.4,
                  ease: HOVER_EASING,
                },
              }}
            >
              <Typography
                size="small"
                variant="body"
                as="span"
                fontSize="0.75rem"
                fontWeight="400"
                letterSpacing="0.02em"
                color="#808080"
              >
                {tag.title}
              </Typography>
            </Motion>
          ))}
          {link != '#' && (
            <Motion
              as="span"
              borderRadius="6px"
              border="1px solid"
              padding="6px 14px"
              fontSize="0.75rem"
              fontWeight="400"
              letterSpacing="0.02em"
              color="#808080"
              display="inline-block"
              onClick={gotoProduct}
              bg="white"
              borderColor="#1f1f1f"
              whileHover={{
                borderColor: '#262626',
                backgroundColor: '#1a1a1a',
              }}
              transition={{
                borderColor: {
                  duration: 0.4,
                  ease: HOVER_EASING,
                },
                backgroundColor: {
                  duration: 0.4,
                  ease: HOVER_EASING,
                },
              }}
            >
              <Typography
                size="small"
                variant="body"
                as="span"
                fontSize="0.75rem"
                fontWeight="400"
                letterSpacing="0.02em"
                color="#808080"
              >
                Go to {name}
              </Typography>
            </Motion>
          )}
        </Box>
      </Box>
      {year && (
        <Box
          position="absolute"
          bottom={['20px', '20px', '28px']}
          right={['20px', '20px', '28px']}
          fontSize={['2.5rem', '2.5rem', '3.5rem']}
          fontWeight="600"
          color="rgba(255, 255, 255, 0.015)"
          lineHeight="1"
          letterSpacing="-0.05em"
          pointerEvents="none"
          zIndex="2"
        >
          {year}
        </Box>
      )}
    </Motion>
  );
};

export default LegacyProductCard;
