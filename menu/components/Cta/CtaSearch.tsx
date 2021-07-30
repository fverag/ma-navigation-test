import React from "react";
import cx from "clsx";
import { CtaSearchProps } from "./types";
import { CtaImage } from "./CtaImage";

export const CtaSearch: React.FC<CtaSearchProps> = ({ className, image }) => (
  <button type="button" className={cx("flex justify-between", className)}>
    {image && <CtaImage image={image} />}
  </button>
);
