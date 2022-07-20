import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { CardsContextProvider } from "../hooks/CardsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CardsContextProvider>
        <Component {...pageProps} />
      </CardsContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
