import { createContext, useContext, useState, type ReactNode } from "react";

interface ApiKeyContextType {
  apiKey: string;
  setApiKey: (apiKey: string) => void;
}

const ApiKeyContext = createContext<ApiKeyContextType>({
  apiKey: import.meta.env.VITE_AUTH,
  setApiKey: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useApiKey = () => useContext(ApiKeyContext);

export const ApiKeyProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_AUTH);

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
};
