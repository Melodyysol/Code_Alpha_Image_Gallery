import { useContext } from "react";
import utilityContext from "../hooks/useUtilities";

export default function UseUtilities() {
  const context = useContext(utilityContext);
  if (!context)
    throw new Error("Utilities context must be used within context provider");
  return context;
}
