import React from "react";
import cx from "clsx";
import { CategoryButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/pro-light-svg-icons/faAngleDown";

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  className,
  title,
  onClick,
  isOpen,
}) => {
  const baseClass = "group bg-transparent";
  const layoutClass = "w-full md:w-auto py-5 md:py-6 px-4 md:h-16";
  const textClass =
    "font-semibold text-left text-text-secondary leading-tighty md:leading-none text-base sm:text-sm";
  const borderClass = "border-b border-grey-400 md:border-b-0";
  const transitionClass = "hover:text-primary-200 transition-text duration-200";

  return (
    <button
      className={cx(baseClass, layoutClass, textClass, borderClass, transitionClass, className)}
      type="button"
      onClick={onClick}
    >
      <p className="flex justify-between md:block">
        <span className="inline-block pr-4">{title}</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={cx(
            { "rotate-180": isOpen },
            "transform md:group-hover:rotate-180 transition-transform duration-200"
          )}
        />
      </p>
    </button>
  );
};
