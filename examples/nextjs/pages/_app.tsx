import { FC } from 'react';
import { AppProps } from 'next/app';
import {
  Footer,
  Header,
  GlobalStyles,
  Subheader,
  ThemeProvider,
} from '@theguild/components';
import '@theguild/components/dist/index.css'

// Overwrite font example:
// 1. Import the font
// 2. Remove `includeFonts` from `<GlobalStyles />`
// import '../public/styles.css';

const App: FC<AppProps> = ({ router, pageProps, Component }) => {
  return (
    <>
      <GlobalStyles includeBase includeFonts />
      <ThemeProvider>
        <Header accentColor="#1cc8ee" activeLink="/open-source" themeSwitch />
        <Subheader
          product={{
            title: 'Components',
            description: 'by The Guild',
            image: {
              src: '/subheader-logo.svg',
              alt: 'TGC',
            },
          }}
          activeLink={router.asPath}
          links={[
            {
              children: 'Home',
              title: 'Go to Home',
              href: '/',
            },
            {
              children: 'GitHub',
              title: 'View on GitHub',
              href: 'https://github.com/the-guild-org/the-guild-components',
              target: '_blank',
              rel: 'noreferrer',
            },
          ]}
          cta={{
            children: 'Get Started',
            title: 'Learn more about TGC',
            href: 'https://github.com/the-guild-org/the-guild-components',
            target: '_blank',
            rel: 'noreferrer',
          }}
        />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
