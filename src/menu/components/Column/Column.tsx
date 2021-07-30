import React from "react";
import cx from "clsx";
import { ColumnProps, ColumnType } from "./types";
import { SubCategory } from "../SubCategory";

export const Column: React.FC<ColumnProps> = ({ children, type, className }) => {
  const isAlternative = type === ColumnType.Alternative;
  const baseClass = "md:pt-9 md:pb-16 md:pr-8 md:first:pl-10 md:last:pl-8 md:last:pr-10";
  const columnClass = cx(baseClass, className, {
    "bg-grey-100 pt-3 pb-8 md:pb-0 mt-3 md:mt-0": isAlternative,
  });

  return (
    <div className={columnClass}>
      {children.map((subCat, index) => (
        <SubCategory {...subCat} key={index} isAlternative={isAlternative} />
      ))}
    </div>
  );
};
