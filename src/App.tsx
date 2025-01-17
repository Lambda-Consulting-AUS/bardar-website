import { useState } from "react";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArticlesContainer from "./containers/ArticlesContainer";
import ArticleContainer from "./containers/ArticleContainer";

function App() {
  const [Theme, setTheme] = useState("light");
  const value: ThemeContextProps = { theme: Theme, setTheme };

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

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeContainer />}/>
              <Route path="/articals" element={<ArticlesContainer />} />
              <Route path="/articals/*" element={<ArticleContainer/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
