import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import { GlobalStyles } from "../lib/styles";
import theme from "../lib/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <GlobalStyles />
        <Meta />
        <Nav />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
