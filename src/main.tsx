import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/index.ts";
import { TeamProvider } from "./context/team.context.tsx";
import { MatchProvider } from "./context/matches.context.tsx";
import { LoadingProvider } from "./context/loading.contect.tsx";
import { NextMatchesProvider } from "./context/nextMatches.context.tsx";
import { ApiKeyProvider } from "./context/apikey.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeamProvider>
      <MatchProvider>
        <LoadingProvider>
          <NextMatchesProvider>
            <ApiKeyProvider>
              <GlobalStyles />
              <App />
            </ApiKeyProvider>
          </NextMatchesProvider>
        </LoadingProvider>
      </MatchProvider>
    </TeamProvider>
  </StrictMode>
);
