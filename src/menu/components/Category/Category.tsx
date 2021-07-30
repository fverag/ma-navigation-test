import React from "react";
import cx from "clsx";
import { CategoryProps } from "./types";
import { CategoryButton } from "./CategoryButton";
import { CategoryPanel } from "./CategoryPanel";
import { toggleCategoryState } from "./helpers";
import { Column } from "../Column";

export const Category: React.FC<CategoryProps> = ({
  children,
  title,
  categoryIndex,
  currentCategory,
  setCurrentCategory,
  setHasCategoryOpen,
}) => {
  const isPanelWide = children.length > 2;
  const isOpen = categoryIndex === currentCategory;

  const panelClass = cx({
    "cat-wide-left w-full md:w-240": isPanelWide,
    "cat-narrow-left md:w-172": !isPanelWide,
    "cat-panel-open max-h-240": isOpen,
    "cat-panel-closed max-h-0": !isOpen,
  });
  const columnsWidthClass = "w-full md:w-68 md:first:w-78 md:last:w-94";

  return (
    <>
      <CategoryButton
        className="cat-button"
        title={title}
        onClick={() =>
          toggleCategoryState({
            categoryIndex,
            setCurrentCategory,
            currentCategory,
            setHasCategoryOpen,
          })
        }
        isOpen={isOpen}
      />
      <CategoryPanel className={panelClass}>
        {children.map((col, index) => (
          <Column {...col} key={index} className={columnsWidthClass} />
        ))}
      </CategoryPanel>
    </>
  );
};
