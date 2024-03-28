import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { dataStructure } from "./assets/tree";
import { StateData, BlueCarbonTreeItem } from "./types";

const AppContext = createContext<{
  state: [StateData[], Dispatch<SetStateAction<StateData[]>>];
  structure: BlueCarbonTreeItem[];
}>(null!);

export function useAppContext() {
  const theContext = useContext(AppContext);
  return theContext;
}

export function AppContextProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [data, setData] = useState<StateData[]>([]);

  return (
    <AppContext.Provider
      value={{ state: [data, setData], structure: dataStructure }}
    >
      {children}
    </AppContext.Provider>
  );
}
