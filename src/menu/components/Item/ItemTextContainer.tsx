import React from "react";
import cx from "clsx";
import { ItemTextContainerProps } from "./types";

export const ItemTextContainer: React.FC<ItemTextContainerProps> = ({
  children,
  isAlternative,
  hasChip,
}) => {
  const baseTextContainerClass = "flex flex-wrap justify-between w-full";
  const conditionalClasses = {
    "ml-4 max-w-50": isAlternative,
    "ml-2 max-w-10/12 sm:max-w-34 md:max-w-52": !isAlternative,
    "-mb-1": hasChip,
  };

  return <div className={cx(baseTextContainerClass, conditionalClasses)}>{children}</div>;
};
