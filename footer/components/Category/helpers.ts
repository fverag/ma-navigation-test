import cx from "clsx";
import { CategoryProps } from "./types";
import { FooterCategoryWidth } from "../../../types/footer";

const getMobileMaxHeightCSSClass = (childrenQuantity: number): string => {
  /*
    written this way to avoid classes being purged by tailwind
  */
  switch (childrenQuantity) {
    case 1:
      return "max-h-12";
    case 2:
      return "max-h-24";
    case 3:
      return "max-h-36";
    case 4:
      return "max-h-48";
    case 5:
      return "max-h-60";
    case 6:
      return "max-h-72";
    case 7:
      return "max-h-84";
    case 8:
      return "max-h-96";
    case 9:
      return "max-h-108";
    case 10:
      return "max-h-120";
    case 11:
      return "max-h-132";
  }

  return "max-h-initial";
};

export const getCategoryCSSClasses = ({
  children,
  title,
  width,
  isOnlyChild,
  horizontal,
  isOpen,
  isCollapsable,
}: CategoryProps & { isOpen: boolean }): Record<string, string> => {
  const isWide = width === FooterCategoryWidth.Wide;
  const isExtraWide = width === FooterCategoryWidth.ExtraWide;

  const maxMobileHeightClass = getMobileMaxHeightCSSClass(children.length);
  const baseWrapper = "md:px-6";
  const baseInnerWrapper = "mx-4 md:mx-0";
  const titleBaseClass = "text-text-primary font-semibold text-base md:mb-4";

  const baseButton = "block w-full px-4 md:px-0 md:mb-0 md:pointer-events-none";
  const buttonWrapperClass =
    "border-b border-grey-300 md:border-0 flex md:block items-center justify-between h-18 md:h-auto w-full md:w-auto md:text-left";
  const chevronBase = "transform md:group-hover:rotate-180 transition-transform duration-200";

  const paragraphBase = "px-4 md:px-0 mb-6";

  return {
    buttonWrapperClass,
    titleBaseClass,
    wrapperClass: cx(baseWrapper, {
      "pt-6 md:pt-10": !title && !isOnlyChild,
      "w-full md:col-span-5": isOnlyChild,
      "w-full md:col-span-1": !isOnlyChild,
      "w-full md:col-span-2": isWide && !isOnlyChild,
      "w-full md:col-span-3": isExtraWide && !isOnlyChild,
      "pt-12 md:pt-0": (isWide || isExtraWide) && !isOnlyChild,
    }),
    innerWrapperClass: cx(baseInnerWrapper, {
      "flex flex-wrap items-center": horizontal,
      "md:block": !horizontal,
      "overflow-hidden transition-max-h duration-300 ease-linear md:max-h-initial": isCollapsable,
      "max-h-0": !isOpen && isCollapsable,
      "border-b border-grey-300 pb-4 md:pb-0 md:border-b-0": isOpen && isCollapsable,
      [maxMobileHeightClass]: isOpen && isCollapsable,
    }),
    buttonTitleClass: cx(baseButton, titleBaseClass, {
      "mb-2": isOpen,
    }),
    chevronClass: cx(chevronBase, { "rotate-180": isOpen }),
    paragraphTitleClass: cx(paragraphBase, titleBaseClass),
    childrenClass: cx({
      "mr-2 mb-2 last:mr-0": horizontal,
      "mb-2 md:mb-4 last:mb-0": !horizontal,
    }),
  };
};
