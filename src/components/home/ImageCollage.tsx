import Image from "next/image";
import type { ImageAsset } from "@/types/site-content.types";

interface ImageCollageProps {
  images: ImageAsset[];
  /** Set when this collage renders above the fold (e.g. a page's hero area). */
  priority?: boolean;
}

/**
 * Two stacked landscape images on the left, one tall portrait image on
 * the right. Renders whichever of the three slots are present in
 * `images`, in order.
 */
export function ImageCollage({ images, priority = false }: ImageCollageProps) {
  const [first, second, third] = images;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        {first ? (
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={first.src}
              alt={first.alt}
              width={first.width ?? 800}
              height={first.height ?? 600}
              sizes="240px"
              priority={priority}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        ) : null}
        {second ? (
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={second.src}
              alt={second.alt}
              width={second.width ?? 800}
              height={second.height ?? 600}
              sizes="240px"
              priority={priority}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        ) : null}
      </div>
      {third ? (
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={third.src}
            alt={third.alt}
            width={third.width ?? 700}
            height={third.height ?? 900}
            sizes="240px"
            priority={priority}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}
