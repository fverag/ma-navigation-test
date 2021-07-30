import React from "react";
import cx from "clsx";
import { buildURL } from "../../../helpers/image/cloudinary";
import { CtaImageProps } from "./types";
import { IMAGE_SIZE, IMAGE_MODS } from "./constants";

export const CtaImage: React.FC<CtaImageProps> = ({ className, image: { url, alt } }) => (
  <img
    src={buildURL(url, IMAGE_MODS)}
    alt={alt}
    className={cx("md:-mt-1", className)}
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />
);
