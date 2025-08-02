import { createContext, useContext, useState, type ReactNode } from "react";

type MatchContextType = {
  setMatch: (
    match: {
      time_mandante: { nome_popular: string };
      time_visitante: { nome_popular: string };
      data_realizacao: string;
      hora_realizacao: string;
      estadio: { nome_popular: string };
      placar_mandante: number;
      placar_visitante: number;
    }[]
  ) => void;
  match:
    | {
        time_mandante: { nome_popular: string };
        time_visitante: { nome_popular: string };
        data_realizacao: string;
        hora_realizacao: string;
        estadio: { nome_popular: string };
        placar_mandante: number;
        placar_visitante: number;
      }[]
    | undefined;
};

const MatchContext = createContext<MatchContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error("useMatch deve ser usado dentro do MatchProvider");
  }
  return context;
};

export const MatchProvider = ({ children }: { children: ReactNode }) => {
  const [match, setMatch] = useState<
    {
      time_mandante: { nome_popular: string };
      time_visitante: { nome_popular: string };
      data_realizacao: string;
      hora_realizacao: string;
      estadio: { nome_popular: string };
      placar_mandante: number;
      placar_visitante: number;
    }[]
  >();

  return (
    <MatchContext.Provider value={{ match, setMatch }}>
      {children}
    </MatchContext.Provider>
  );
};
