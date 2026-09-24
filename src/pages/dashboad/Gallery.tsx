import { Bookmark, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "../../components";
import UseUpload from "../../custom-hooks/UseUpload";
import { useEffect } from "react";

export default function Gallery() {
  const { images, getImages } = UseUpload();

  useEffect(() => {
    const fetchImages = async () => {
      await getImages();
    };

    fetchImages();
  }, []);

  return images.map((prev) => (
    <AnimatePresence mode="wait" key={prev.id}>
      <motion.article
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        layout
        className="container bg-base-300 p-5 py-8 rounded-md flex flex-col gap-y-2 "
      >
        <div className="relative w-full h-full">
          <button
            type="button"
            aria-label={`Download ${prev.title || "image"}`}
            className="absolute right-2 bottom-2 btn btn-sm rounded-full"
          >
            <Icon icon={Download} />
          </button>
          <button
            type="button"
            aria-label={`Save ${prev.title || "image"} to bookmarks`}
            className="absolute left-2 bottom-2 btn btn-sm rounded-full"
          >
            <Icon icon={Bookmark} />
          </button>
          <img
            src={prev.url}
            alt={prev.title ? `${prev.title} preview` : "Gallery image preview"}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <span className="font-bold capitalize text-base-content">
          {prev.title}
        </span>
      </motion.article>
    </AnimatePresence>
  ));
}
