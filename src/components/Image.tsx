import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: "1/1" | "4/3" | "16,9";
}

export default function Image({ src, alt, aspectRatio }: ImageProps) {
  return (
    <div className={`aspect-${aspectRatio || "1/1"}`}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}
