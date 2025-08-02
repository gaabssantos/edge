import { createContext, useContext, useState, type ReactNode } from "react";

type NextMatchesContextType = {
  setNextMatches: (
    match: {
      time_mandante: { nome_popular: string };
      time_visitante: { nome_popular: string };
      data_realizacao: string;
      hora_realizacao: string;
      estadio: { nome_popular: string };
    }[]
  ) => void;
  nextMatch:
    | {
        time_mandante: { nome_popular: string };
        time_visitante: { nome_popular: string };
        data_realizacao: string;
        hora_realizacao: string;
        estadio: { nome_popular: string };
      }[]
    | undefined;
};

const NextMatchesContext = createContext<NextMatchesContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useNextMatches = () => {
  const context = useContext(NextMatchesContext);
  if (!context) {
    throw new Error("useNextMatches deve ser usado dentro do NextMatchesProvider");
  }
  return context;
};

export const NextMatchesProvider = ({ children }: { children: ReactNode }) => {
  const [nextMatch, setNextMatches] = useState<
    {
      time_mandante: { nome_popular: string };
      time_visitante: { nome_popular: string };
      data_realizacao: string;
      hora_realizacao: string;
      estadio: { nome_popular: string };
    }[]
  >();

  return (
    <NextMatchesContext.Provider value={{ nextMatch, setNextMatches }}>
      {children}
    </NextMatchesContext.Provider>
  );
};
