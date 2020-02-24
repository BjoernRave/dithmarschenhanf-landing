import Router from "next/router";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import { pageView } from "../lib/analytics";
import { GlobalStyles } from "../lib/styles";
import theme from "../lib/theme";

Router.events.on("routeChangeComplete", url => {
  pageView(url);
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <GlobalStyles />
        <Meta />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
