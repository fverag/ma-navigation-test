import React from "react";
import cx from "clsx";
import { ItemProps } from "./types";
import { contructItemUrl } from "./helpers";

export const ItemButton: React.FC<ItemProps> = ({ className, label, url, urlType }) => {
  const layoutClass = "inline-block py-2 px-7 max-w-full";
  const textClass = "uppercase text-primary-200 text-sm font-semibold tracking-widest";
  const borderClass = "border border-primary-200 rounded-3xl";
  const transitionClass = "hover:bg-primary-50 transition-colors duration-200";

  const buttonClass = cx(className, layoutClass, textClass, borderClass, transitionClass);
  const href = contructItemUrl(url, urlType);

  return (
    <a href={href} className={buttonClass}>
      {label}
    </a>
  );
};
