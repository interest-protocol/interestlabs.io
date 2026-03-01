import {
  Box,
  Button,
  Motion,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { Routes, RoutesEnum } from '@/constants/routes';

import Social from '../social';
import { AnchorArrowSVG, CertificateSVG } from '../svg';
import Shadow from './shadow';

const Footer: FC = () => (
  <Box position="relative" py="8xl">
    <Motion
      right="0%"
      bottom="0%"
      zIndex="-1"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
    <Box
      p="l"
      gap="8xl"
      mx="auto"
      display="flex"
      maxWidth="1440px"
      position="relative"
      flexDirection="column"
    >
      <Box
        gap="2xl"
        display="flex"
        color="onSurface"
        mb={['unset', 'unset', 'unset', '8xl']}
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box>
          <Typography variant="body" size="medium">
            Web3 open-source software built by leading Move Language engineers.
          </Typography>
          <Box display="flex" alignItems="center">
            <Box
              width={['100%', '28rem', '28rem', '23rem']}
              gap="1rem"
              pt="1rem"
            >
              <Box
                width="auto"
                key={unikey()}
                cursor="pointer"
                overflow="hidden"
              >
                <a
                  href={Routes[RoutesEnum.Prr]}
                  key={unikey()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/img/stamp.webp"
                    alt="Portugal Stamp"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </a>
              </Box>
            </Box>
            <a
              href="https://www.interestlabs.io/prr.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <TooltipWrapper
                arrowPosition="left"
                tooltipContent="IPX Certified"
                tooltipPosition="left"
                color="#000"
                bg="onSurface"
                width="max-content"
              >
                <Box
                  color="white"
                  display="flex"
                  height="3rem"
                  width="3rem"
                  alignItems="center"
                  transition="all 300ms ease-in-out"
                  nHover={{ color: 'goldenrod' }}
                >
                  <CertificateSVG
                    maxWidth="100%"
                    maxHeight="100%"
                    width="100%"
                  />
                </Box>
              </TooltipWrapper>
            </a>
          </Box>
          <Box width={['100%', '28rem', '28rem', '30rem']}>
            <Typography
              variant="body"
              size="medium"
              textAlign="justify"
              lineHeight="1.75rem"
            >
              A empresa DEFI LDA foi beneficiária de apoio no âmbito do Plano de
              Recuperação e Resiliência (PRR), através do projeto ”Projeto Nº
              2574”, enquadrado no Aviso Nº 10/C16-i02/2022, que visa
              impulsionar a transição digital das empresas em Portugal.
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: '#B4C5FF' }}
                href="https://recuperarportugal.gov.pt"
              >
                Clique aqui para saber mais sobre o Plano de Recuperação e
                Resiliência (PRR)
              </a>
            </Typography>
          </Box>
        </Box>

        <Box
          gap="s"
          display="flex"
          flexDirection="column"
          alignItems={['unset', 'unset', 'unset', 'flex-end']}
        >
          <a
            href="https://docs.interestprotocol.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="tonal"
              SuffixIcon={
                <AnchorArrowSVG
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              }
            >
              Documentation
            </Button>
          </a>
          <a
            href="https://drive.google.com/drive/folders/176q4-80OZaHCJEfBiZHsHYHIH0Z_ipgf?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="tonal"
              SuffixIcon={
                <AnchorArrowSVG
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              }
            >
              Media Kit
            </Button>
          </a>
          <a href={Routes[RoutesEnum.Prr]} target="_blank" rel="noreferrer">
            <Button
              variant="tonal"
              SuffixIcon={
                <AnchorArrowSVG
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              }
            >
              PRR
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        mt={['unset', 'unset', '8xl']}
      >
        <Box display="flex" gap="8xl">
          <Social />
        </Box>
        <Typography
          variant="body"
          size="small"
          textAlign="right"
          color="onSurface"
        >
          © {new Date().getFullYear()} — Copyright
          <br />
          All Rights reserved
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Footer;
