/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'common/Container';

const TypographyComponent = () => {
  const theme = useTheme();

  const renderCodeBlock = (code = '', language = 'jsx') => {
    return (
      <Box
        component={SyntaxHighlighter}
        language={language}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
      >
        {code}
      </Box>
    );
  };

  return (
    <Box>
      <Container>
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Typography
          </Typography>
          <Typography>Font famaily is added using Google Fonts.</Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            To modify the font family go to <code>public/index.html</code> and
            add your Google Font.
          </Typography>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            For more information, please visit{' '}
            <Link
              href={'https://material-ui.com/api/typography/'}
              target={'_blank'}
            >
              Material-UI typography API.
            </Link>
          </Typography>
        </Box>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Typography variants
          </Typography>
          <Grid container spacing={4}>
            {[
              'body1',
              'body2',
              'subtitle1',
              'subtitle2',
              'caption',
              'button',
              'overline',
              'srOnly',
              'h6',
              'h5',
              'h4',
              'h3',
              'h2',
              'h1',
            ].map((item) => (
              <Grid item xs={12} key={item}>
                <Box component={Card} boxShadow={4} borderRadius={4}>
                  <CardContent>
                    <Typography variant={item}>
                      {item}. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                  <CardContent>
                    {renderCodeBlock(
                      `<Typography variant="${item}">
  Loipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
</Typography>`,
                      'jsx',
                    )}
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TypographyComponent;
