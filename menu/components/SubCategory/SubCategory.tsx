import React from "react";
import { SubCategoryProps } from "./types";
import { SubCategoryLink } from "./SubCategoryLink";
import { Item } from "../Item";

export const SubCategory: React.FC<SubCategoryProps> = ({
  title,
  link,
  children,
  isAlternative,
}) => (
  <div className="md:mt-10 md:first:mt-0">
    <div>
      <p className="flex justify-between uppercase md:mb-4 px-4 md:px-0 pt-5 pb-2 md:pb-4 md:pt-0 md:border-b border-grey-400 text-text-secondary font-semibold text-xs tracking-2">
        <span>{title}</span>
        {link && <SubCategoryLink className="hidden md:block" {...link} />}
      </p>
    </div>
    {children.map((item, index) => (
      <Item {...item} key={index} isAlternative={isAlternative} />
    ))}
    {link && (
      <SubCategoryLink className="md:hidden font-semibold text-xs tracking-2 pl-4" {...link} />
    )}
  </div>
);
