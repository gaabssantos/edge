import { createContext, useContext, useState, type ReactNode } from "react";

type TeamContextType = {
  setTeam: (team: { nome: string; escudo: string } | undefined) => void;
  team: { nome: string; escudo: string } | undefined;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam deve ser usado dentro do TeamProvider");
  }
  return context;
};

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<{ nome: string; escudo: string } | undefined>();

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
