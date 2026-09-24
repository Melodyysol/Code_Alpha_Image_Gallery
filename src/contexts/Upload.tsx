import { useState, type ReactNode } from "react";
import uploadContext from "../hooks/useUpload";
import api from "../api";

export default function UploadProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<
    { id: string; url: string; title: string }[]
  >([]);
  const getImages = async (category?: string, search?: string) => {
    try {
      const { data } = await api.get("/upload/images", {
        params: { category, search },
      });

      const fetchImages = data.data.images;

      setImages(fetchImages);

      return { success: true, error: null };
    } catch (err: any) {
      console.log(err);
      return { error: err.response?.data?.message, success: false };
    }
  };

  return (
    <uploadContext.Provider value={{ images, getImages }}>
      {children}
    </uploadContext.Provider>
  );
}
