import React from "react";
import cx from "clsx";
import { ItemProps } from "./types";
import { contructItemUrl } from "./helpers";

export const ItemImage: React.FC<ItemProps> = ({
  className,
  label,
  url,
  urlType,
  image,
  isOnlyChild,
}) => {
  const isLink = url && url.length;
  const baseClass = "block text-text-primary";
  const Wrapper = isLink ? "a" : "div";
  const wrapperProps = {
    href: Wrapper === "a" ? contructItemUrl(url, urlType) : undefined,
    className: cx(className, baseClass),
  };
  const imageProps = {
    src: image.url,
    alt: label && label.length ? label : image.alt,
    className: cx({
      "mx-auto pb-2": isOnlyChild,
      "hover:opacity-75 transition-opacity duration-200": isLink,
    }),
  };

  return (
    <Wrapper {...wrapperProps}>
      <img alt={imageProps.alt} {...imageProps} loading="lazy" />
    </Wrapper>
  );
};
