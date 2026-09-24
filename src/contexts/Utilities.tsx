import { useState, type ReactNode } from "react";
import utilityContext from "../hooks/useUtilities";

export default function UtilitiesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <utilityContext.Provider value={{ collapsed, onToggle }}>
      {children}
    </utilityContext.Provider>
  );
}
