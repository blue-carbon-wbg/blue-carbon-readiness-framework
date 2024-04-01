import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { dataStructureAlt } from "./assets/tree";
import { StateData, BlueCarbonTree } from "./types";
import useLocalStorageState from "use-local-storage-state";

const AppContext = createContext<{
  state: [StateData[], Dispatch<SetStateAction<StateData[]>>];
  structure: BlueCarbonTree[];
}>(null!);

export function useAppContext() {
  const theContext = useContext(AppContext);
  return theContext;
}

export function AppContextProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [data, setData] = useLocalStorageState<StateData[]>("blueCarbon", {
    defaultValue: [],
  });

  return (
    <AppContext.Provider
      value={{ state: [data, setData], structure: dataStructureAlt }}
    >
      {children}
    </AppContext.Provider>
  );
}
