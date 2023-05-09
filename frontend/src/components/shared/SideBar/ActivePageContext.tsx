import { ReactNode, createContext, useState } from 'react';

interface ActivePageContextType {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface ActivePageProviderProps {
  children: ReactNode;
}

const defaultActivePageContextValue: ActivePageContextType = {
  activePage: '',
  setActivePage: () => {}, // default no-op function
};

export const ActivePageContext = createContext<ActivePageContextType>(defaultActivePageContextValue);

export const ActivePageProvider = ({ children }: ActivePageProviderProps) => {
  const [activePage, setActivePage] = useState('/');

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};