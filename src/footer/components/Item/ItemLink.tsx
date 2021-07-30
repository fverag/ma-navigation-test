import React from "react";
import cx from "clsx";
import { buildURL } from "../../../helpers/image/cloudinary";
import { ItemProps } from "./types";
import { FooterItemUrlType } from "../../../types/footer";
import { contructItemUrl } from "./helpers";
import { ICON_SIZE, ICON_MODS } from "./constants";

export const ItemLink: React.FC<ItemProps> = ({
  className,
  label,
  url,
  urlType,
  image,
  preLabel,
  isBold,
}) => {
  const hasImage = Boolean(image);
  const isEmail = urlType === FooterItemUrlType.Email;
  const isPhone = urlType === FooterItemUrlType.Phone;
  const isWhatsapp = urlType === FooterItemUrlType.Whatsapp;

  const baseClass = "block hover:underline py-2 md:py-0 md:text-sm";
  const itemClass = cx(className, baseClass, {
    "text-text-primary": !isEmail,
    "text-primary-200": isEmail,
    "text-sm": !(isPhone && isWhatsapp),
    "text-base md:text-base": isPhone || isWhatsapp,
    "font-semibold": isBold,
    "flex items-center": hasImage,
  });
  const href = contructItemUrl(url, urlType);
  const usePreLabel = preLabel && preLabel.trim().length;

  return (
    <>
      {usePreLabel && <span className="block text-text-primary text-sm">{preLabel}</span>}
      <a href={href} className={itemClass}>
        {hasImage && (
          <img
            src={buildURL(image.url, ICON_MODS)}
            alt={image.alt}
            className="mr-2 inline-block"
            width={ICON_SIZE}
            height={ICON_SIZE}
            loading="lazy"
          />
        )}
        <span>{label}</span>
      </a>
    </>
  );
};
