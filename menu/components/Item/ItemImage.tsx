import React from "react";
import cx from "clsx";
import { buildURL, buildDensities } from "../../../helpers/image/cloudinary";
import { ItemImageProps } from "./types";
import {
  REGULAR_IMAGE_SIZE,
  REGULAR_IMAGE_MODS,
  ALT_IMAGE_WIDTH,
  ALT_IMAGE_HEIGHT,
  ALT_IMAGE_MODS,
} from "./constants";

export const ItemImage: React.FC<ItemImageProps> = ({ image, isAlternative }) => {
  const imageSrc = image
    ? isAlternative
      ? buildURL(image.url, ALT_IMAGE_MODS)
      : buildURL(image.url, REGULAR_IMAGE_MODS)
    : undefined;
  const imageContainerClass = isAlternative ? "w-18 sm:w-22" : "w-5 md:w-6";

  // regular image is assumed to be an svg
  const imageProps = image
    ? {
        className: cx("block h-auto w-full", isAlternative ? "rounded" : "mt-0.5"),
        src: imageSrc,
        srcSet: imageSrc && isAlternative ? buildDensities(imageSrc) : undefined,
        alt: image.alt ? image.alt : "",
        width: isAlternative ? ALT_IMAGE_WIDTH : REGULAR_IMAGE_SIZE,
        height: isAlternative ? ALT_IMAGE_HEIGHT : REGULAR_IMAGE_SIZE,
      }
    : null;

  return <div className={imageContainerClass}>{image && <img {...imageProps} />}</div>;
};
