import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { ReactComponent as HeroIllustration } from "../assets/hero.svg";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArticlesContainer from "./ArticlesContainer";

const theme = createTheme({
  typography: {
    fontFamily: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#e859ff',
      main: '#b217db',
      dark: '#7d00a8',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#b35eff',
      main: '#7a29ff',
      dark: '#3900ca',
      contrastText: '#FFF',
    },
  },
});

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased text-primary" style={{minWidth: "375px"}}>
      <ThemeProvider theme={theme}>
        <div className="mt-0 pt-0">
          <Hero
            image={HERO_IMAGE}
            greetingText={GREETING_TEXT}
            greetingDescription={GREETING_DESCRIPTION}
            buttonText={CTA_TEXT}
          />
        </div>
      </ThemeProvider>
      <div className="absolute top-full w-screen">
        <ArticlesContainer/>
        <div className="bg-gradient-to-l from-info to-secondary custom-shape-divider-bottom-1628871186">
          <HeroIllustration stroke="white" className="h-24"/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeContainer;
