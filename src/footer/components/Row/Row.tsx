import React, { useState } from "react";
import cx from "clsx";
import { RowProps } from "./types";
import { Category, CurrentCategoryState } from "../Category";

export const Row: React.FC<RowProps> = ({ children, index, quantity }) => {
  const [currentCategory, setCurrrentCategory] = useState<CurrentCategoryState>(null);
  const hasCollapsableChildren = index === 0; // by design, only first row's categories are collapsable in mobile
  const isSecondToLast = index === quantity - 2;
  const hasOneChild = children.length === 1;

  const baseClass = "md:grid grid-cols-5 mb-12 last:mb-0 last:pb-10 md:last:pb-16";
  const conditionalClass = {
    "text-center": hasOneChild,
  };

  return (
    <div className={cx(baseClass, conditionalClass)}>
      {isSecondToLast && <hr className="md:hidden mx-4 border-t border-grey-300 -mb-4" />}
      {children.map((cat, index) => (
        <Category
          {...cat}
          key={index}
          index={index}
          isCollapsable={hasCollapsableChildren}
          isOnlyChild={hasOneChild}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrrentCategory}
        />
      ))}
    </div>
  );
};
