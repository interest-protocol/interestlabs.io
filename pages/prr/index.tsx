import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Footer } from '@/components';
import Headerr from '@/components/header';
import { line } from '@/prr-types/prr.types';

import { PRR, PRRR, PRRRR, PRRRRR } from '../../prr-types/prr.data';

const PRRSection: FC = () => (
  <>
    <Headerr />
    <Box px="xl">
      <Box
        paddingLeft="30px"
        py="8xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        gap="24px"
        paddingBottom="60px"
        paddingTop="60px"
        maxWidth="1320px"
      >
        {PRR.map((section, i) => (
          <div key={`prr-${i}`}>
            <Typography
              mb="s"
              size="large"
              variant="title"
              fontWeight="900"
              color="onSurface"
              fontSize={['1.7rem', '1.7rem', '2rem']}
            >
              {section.title}
            </Typography>
            {section.body.map((line: line, j) => (
              <Typography
                key={`prr-body-${j}`}
                mb="s"
                mt="0"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                letterSpacing="0%"
                maxWidth="900px"
              >
                {line}
              </Typography>
            ))}
            <br />
            {section.fbody.map((line, j) => (
              <Typography
                key={`prr-body-${j}`}
                mb="0"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                letterSpacing="0%"
              >
                {line}
              </Typography>
            ))}
          </div>
        ))}

        {PRRR.map((section, i) => (
          <div key={`prrr-${i}`}>
            <Typography
              mb="m"
              size="small"
              variant="title"
              fontWeight="700"
              color="onSurface"
              fontSize={['1.5rem', '1.5rem', '2rem']}
            >
              {section.title}
            </Typography>
            {section.body.map((line: line, j) => (
              <Typography
                key={`prrr-body-${j}`}
                mb="s"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                maxWidth="900px"
              >
                {line}
              </Typography>
            ))}
          </div>
        ))}

        {PRRRR.map((section, i) => (
          <div key={`prrrr-${i}`}>
            <Typography
              mb="m"
              size="large"
              variant="title"
              fontWeight="700"
              color="onSurface"
              fontSize={['1.5rem', '1.5rem', '2rem']}
            >
              {section.title}
            </Typography>
            {section.body.map((line: line, j) => (
              <Typography
                key={`prrrr-body-${j}`}
                mb="s"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                maxWidth="900px"
              >
                {line}
              </Typography>
            ))}
          </div>
        ))}

        {PRRRRR.map((section, i) => (
          <div key={`prrrrr-${i}`}>
            <Typography
              mb="m"
              size="large"
              variant="title"
              fontWeight="700"
              color="onSurface"
              fontSize={['1.5rem', '1.5rem', '2rem']}
            >
              {section.title}
            </Typography>

            {section.body.map((item, j) => (
              <Typography
                key={`prrrrr-body-${j}`}
                mb="0"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                letterSpacing="0%"
              >
                • {item}
              </Typography>
            ))}
            <br />
            {section.fbody.map((line: line, k) => (
              <Typography
                key={`prrrrr-fbody-${k}`}
                mt="0"
                mb="0"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                maxWidth="900px"
              >
                {line}
              </Typography>
            ))}
          </div>
        ))}
      </Box>
    </Box>
    <Footer />
  </>
);

export default PRRSection;
