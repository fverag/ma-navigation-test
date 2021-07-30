import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/pro-light-svg-icons/faAngleDown";
import { CategoryProps } from "./types";
import { getCategoryCSSClasses } from "./helpers";
import { Item } from "../Item";

export const Category: React.FC<CategoryProps> = (props) => {
  const {
    index: categoryIndex,
    children,
    title,
    isOnlyChild,
    isCollapsable,
    setCurrentCategory,
    currentCategory,
  } = props;
  const isOpen = currentCategory === categoryIndex;

  const {
    wrapperClass,
    innerWrapperClass,
    buttonTitleClass,
    buttonWrapperClass,
    chevronClass,
    paragraphTitleClass,
    childrenClass,
  } = getCategoryCSSClasses({ ...props, isOpen });

  return (
    <article className={wrapperClass}>
      {Boolean(title) &&
        (isCollapsable ? (
          <button
            className={buttonTitleClass}
            type="button"
            onClick={() => setCurrentCategory(!isOpen ? categoryIndex : null)}
          >
            <span className={buttonWrapperClass}>
              <span>{title}</span>
              <span className="md:hidden">
                <FontAwesomeIcon icon={faAngleDown} size="2x" className={chevronClass} />
              </span>
            </span>
          </button>
        ) : (
          <p className={paragraphTitleClass}>
            <span>{title}</span>
          </p>
        ))}
      <div className={innerWrapperClass}>
        {children.map((item, index) => (
          <Item {...item} key={index} className={childrenClass} isOnlyChild={isOnlyChild} />
        ))}
      </div>
    </article>
  );
};
