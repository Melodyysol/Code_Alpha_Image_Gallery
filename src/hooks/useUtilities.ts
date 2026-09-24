import { createContext } from "react";

type ContextType = {
  collapsed: boolean;
  onToggle: () => void;
};

const utilityContext = createContext<undefined | ContextType>(undefined);

export default utilityContext;
