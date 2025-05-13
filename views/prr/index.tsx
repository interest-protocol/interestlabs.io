import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Footer } from '@/components';
import Header from '@/components/header';

const RRP: FC = () => (
  <>
    <Header withoutBall isPRR numberOfParticles={100} />
    <Box
      px="xl"
      gap="1.5rem"
      py="3.75rem"
      display="flex"
      maxWidth="1440px"
      mx="auto"
      flexDirection="column"
      color="onSurface"
    >
      <Box>
        <Typography
          mb="1rem"
          size="large"
          variant="title"
          fontWeight="700"
          color="onSurface"
          lineHeight={['auto', 'auto', 'auto', '4rem']}
          fontSize={['1.7rem', '1.7rem', '2.5rem']}
        >
          Plano de Recuperação e Resiliência (PRR)
        </Typography>
        <Typography
          as="p"
          size="small"
          variant="body"
          verticalAlign="middle"
          fontSize={['1rem', '1rem', '1rem', '1.375rem']}
          textAlign={['justify', 'justify', 'justify', 'left']}
          lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.75rem']}
        >
          Projeto Nº 2574 | Aviso Nº 10/C16-i02/2022. <br />
          <br />
          A empresa DEFI LDA foi beneficiária de apoio no âmbito do Plano de
          Recuperação e Resiliência (PRR), através do projeto &rdquo;Projeto Nº
          2574&rdquo;, enquadrado no Aviso Nº 10/C16-i02/2022, que visa
          impulsionar a transição digital das empresas em Portugal. <br />
          <br />
          Este projeto insere-se na componente C16-i02 do PRR, dedicada à
          Transição Digital das Empresas, tendo como objetivo principal a
          modernização tecnológica, a digitalização de processos e o reforço da
          competitividade empresarial. <br />
          <br />
          Montante de apoio atribuído: 30.000€ <br />
          Data de início: 01/03/2023
          <br />
          Data de conclusão: 01/06/2024
        </Typography>
      </Box>

      <Box>
        <Typography
          mb="1rem"
          size="large"
          variant="title"
          fontWeight="700"
          color="onSurface"
          lineHeight={['auto', 'auto', 'auto', '4rem']}
          fontSize={['1.7rem', '1.7rem', '2.5rem']}
        >
          Síntese do Projeto
        </Typography>
        <Typography
          as="p"
          size="small"
          variant="body"
          verticalAlign="middle"
          fontSize={['1rem', '1rem', '1rem', '1.375rem']}
          textAlign={['justify', 'justify', 'justify', 'left']}
          lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.75rem']}
        >
          O projeto Interest Protocol visa democratizar o acesso a produtos
          financeiros tradicionais — como ações, commodities e forex — no
          universo das criptomoedas. Através de tecnologia blockchain e soluções
          DeFi (Finanças Descentralizadas), pretende-se permitir que
          investidores e desenvolvedores possam explorar novas formas de
          interação entre os mercados tradicionais e digitais, promovendo a
          inovação e a inclusão financeira global.
        </Typography>
      </Box>
      <Box>
        <Typography
          mb="1rem"
          size="large"
          variant="title"
          fontWeight="700"
          color="onSurface"
          lineHeight={['auto', 'auto', 'auto', '4rem']}
          fontSize={['1.7rem', '1.7rem', '2.5rem']}
        >
          Descrição e Objetivos do Projeto
        </Typography>
        <Typography
          as="p"
          size="small"
          variant="body"
          verticalAlign="middle"
          fontSize={['1rem', '1rem', '1rem', '1.375rem']}
          textAlign={['justify', 'justify', 'justify', 'left']}
          lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.75rem']}
        >
          O Interest Protocol é uma startup de blockchain que tem como missão
          integrar produtos financeiros convencionais no ecossistema das
          criptomoedas, permitindo a negociação de ativos como ações,
          commodities e forex por meio de tecnologia descentralizada. <br />
          <br />A plataforma opera em código aberto, disponível no GitHub{' '}
          <a
            href="https://github.com/interest-protocol/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#B4C5FF' }}
          >
            (Interest Protocol)
          </a>
          , promovendo a transparência, a colaboração e o desenvolvimento de
          soluções por terceiros. O projeto aposta na abertura de dados como
          meio de fomentar o crescimento do setor DeFi, permitindo que outras
          iniciativas utilizem as suas bases para acelerar a implementação de
          serviços financeiros descentralizados.
          <br />
          <br /> Sendo uma plataforma 100% digital, o projeto apresenta um
          impacto ambiental reduzido, uma vez que minimiza a necessidade de
          recursos físicos e humanos para validar operações, que passam a ser
          automaticamente processadas por smart contracts. Neste sentido,
          contribui para a sustentabilidade tecnológica, em linha com o Artigo
          17.º do Regulamento (UE) 2020/852.
        </Typography>
      </Box>
      <Box>
        <Typography
          mb="1rem"
          size="large"
          variant="title"
          fontWeight="700"
          color="onSurface"
          lineHeight={['auto', 'auto', 'auto', '4rem']}
          fontSize={['1.7rem', '1.7rem', '2.5rem']}
        >
          Áreas Temáticas do Projeto
        </Typography>
        <Typography
          as="p"
          size="small"
          variant="body"
          verticalAlign="middle"
          fontSize={['1rem', '1rem', '1rem', '1.375rem']}
          textAlign={['justify', 'justify', 'justify', 'left']}
          lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.75rem']}
        >
          • Sustentabilidade <br />• Transição Digital <br />• Inovação
          Financeira <br />
          <br />
          Este investimento é cofinanciado pela União Europeia, através do fundo
          NextGenerationEU, contribuindo para uma economia mais digital,
          resiliente e sustentável. Mais informações sobre o PRR em:
          <a
            href="https://recuperarportugal.gov.pt"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#B4C5FF' }}
          >
            {' https://recuperarportugal.gov.pt'}
          </a>
        </Typography>
      </Box>
    </Box>
    <Footer />
  </>
);

export default RRP;
