import { createContext } from "react";

type UploadContext = {
  images: {
    id: string;
    url: string;
    title: string;
  }[];
  getImages: (
    category?: string | undefined,
    search?: string | undefined,
  ) => Promise<{
    error: any;
    success: boolean;
  }>;
};

const uploadContext = createContext<undefined | UploadContext>(undefined);
export default uploadContext;
