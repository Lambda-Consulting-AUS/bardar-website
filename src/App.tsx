import { useState } from "react";
import Seo from "./components/Seo";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME, URL } from "./data/data";

function App() {
  const [Theme, setTheme] = useState("light");
  const value: ThemeContextProps = { theme: Theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <Seo
        url={URL}
        lang="en"
        metaDescription={GREETING_DESCRIPTION[0]}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME}
        author={NAME}
        theme={Theme}
      />
      <HomeContainer/>
    </ThemeContext.Provider>
  );
}

export default App;
