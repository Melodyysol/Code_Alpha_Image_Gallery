import type { ReactNode } from "react";
import AuthProvider from "./Auth";
import UtilitiesProvider from "./Utilities";
import UploadProvider from "./Upload";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <UploadProvider>
        <UtilitiesProvider>{children}</UtilitiesProvider>
      </UploadProvider>
    </AuthProvider>
  );
}
