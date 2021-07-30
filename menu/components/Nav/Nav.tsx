import React, { useState } from "react";
import cx from "clsx";
import { NavProps } from "./types";
import { Category } from "../Category";

export const Nav: React.FC<NavProps> = ({
  children,
  categories,
  className,
  setHasCategoryOpen,
}) => {
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);
  const baseClass =
    "nav absolute md:static top-16 md:top-auto order-last md:order-none md:h-auto md:max-h-initial w-full md:w-auto bg-white";
  const layoutClass = "block md:max-h-initial overflow-hidden md:overflow-auto";
  const transitionClass = "transition-max-h duration-300 ease-linear";

  return (
    <nav className={cx(baseClass, layoutClass, transitionClass, className)}>
      {categories.map((cat, index) => (
        <Category
          {...cat}
          key={index}
          categoryIndex={index}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          setHasCategoryOpen={setHasCategoryOpen}
        />
      ))}
      {children}
    </nav>
  );
};
