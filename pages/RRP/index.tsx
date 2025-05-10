import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Footer } from '@/components';
import Header from '@/components/header';
import {
  heading,
  lastsummry,
  projectdescription,
  projectsummary,
} from '@/rrp-types/rrp.data';
import { index, text } from '@/rrp-types/rrp.types';
const PRRSection: FC = () => (
  <>
    <Header />
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
        {heading.map((section, index) => (
          <div key={`prr-${index}`}>
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
            {section.body.map((text: text, index: index) => (
              <Typography
                key={`prr-body-${index}`}
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
                {text}
              </Typography>
            ))}
            <br />
            {section.metadata.map((text: text, index: index) => (
              <Typography
                key={`prr-body-${index}`}
                mb="0"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                letterSpacing="0%"
              >
                {text}
              </Typography>
            ))}
          </div>
        ))}

        {projectsummary.map((section, index: index) => (
          <div key={`prrr-${index}`}>
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
            {section.body.map((text: text, index: index) => (
              <Typography
                key={`prrr-body-${index}`}
                mb="s"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                maxWidth="900px"
              >
                {text}
              </Typography>
            ))}
          </div>
        ))}

        {projectdescription.map((section, index: index) => (
          <div key={`prrrr-${index}`}>
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
            {section.body.map((text: text, index: index) => (
              <Typography
                key={`prrrr-body-${index}`}
                mb="s"
                lineHeight="180%"
                variant="body"
                size="small"
                color="onSurface"
                fontWeight="500"
                maxWidth="900px"
              >
                {text}
              </Typography>
            ))}
          </div>
        ))}

        {lastsummry.map((section, index: index) => (
          <div key={`prrrrr-${index}`}>
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

            {section.body.map((item: text, index: index) => (
              <Typography
                key={`prrrrr-body-${index}`}
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
            {section.metadata.map((text: text, k: index) => (
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
                {text}
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
