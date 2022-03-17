import "../styles/globals.css";
import type { AppProps } from "next/app";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <Component {...pageProps} />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
