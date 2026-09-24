import { useContext } from "react";
import uploadContext from "../hooks/useUpload";

export default function UseUpload() {
  const context = useContext(uploadContext);
  if (!context)
    throw new Error("upload context must be used within upload provider");
  return context;
}
