import React from "react";
import cx from "clsx";
import { CategoryPanelProps } from "./types";

export const CategoryPanel: React.FC<CategoryPanelProps> = ({
  children,
  className,
  shapeClass = "rounded-b-lg",
  transitionClass = "duration-400 ease-linear md:duration-200 md:ease-in-out",
}) => {
  const baseClass = "cat-panel";
  const layoutClass = "md:flex md:absolute z-50 justify-between overflow-hidden md:max-h-120";
  const colorClass = "bg-white";

  return (
    <div className={cx(baseClass, layoutClass, shapeClass, colorClass, transitionClass, className)}>
      {children}
    </div>
  );
};
