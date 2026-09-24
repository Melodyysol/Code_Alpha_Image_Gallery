import { useContext } from "react";
import { AuthContext } from "../hooks/useAuth";

export default function UseAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth context must be within Auth provider");
  return context;
}
