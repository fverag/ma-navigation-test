import React from "react";
import cx from "clsx";
import { ItemTitleProps } from "./types";

export const ItemTitle: React.FC<ItemTitleProps> = ({ title, isAlternative, hasChip }) => {
  const baseTitleClass = "group-hover:text-primary-200 transition-text duration-200";
  const conditionalClasses = {
    "text-sm leading-5 md:flex md:items-center": isAlternative,
    "text-base font-semibold tracking-wide": !isAlternative,
    "pb-1": hasChip,
  };

  return <p className={cx(baseTitleClass, conditionalClasses)}>{title}</p>;
};
