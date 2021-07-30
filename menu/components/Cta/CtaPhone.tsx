import React from "react";
import cx from "clsx";
import { CtaPhoneProps } from "./types";
import { CtaImage } from "./CtaImage";

export const CtaPhone: React.FC<CtaPhoneProps> = ({ className, label, value, image }) => (
  <a href={`tel:${value}`} className={cx("flex justify-between", className)}>
    {image && <CtaImage image={image} className="md:mr-3" />}
    <span className="hidden md:inline-block">{label}</span>
  </a>
);
