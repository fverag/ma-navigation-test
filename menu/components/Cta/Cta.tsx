import React from "react";
import cx from "clsx";
import { MenuCtaType } from "../../../types/menu";
import { CtaProps } from "./types";
import { CtaButton } from "./CtaButton";
import { CtaPhone } from "./CtaPhone";
import { CtaSearch } from "./CtaSearch";

const getCtaComponent = (componentType: string): React.FC<CtaProps> | null => {
  switch (componentType) {
    case MenuCtaType.Button:
      return CtaButton;
    case MenuCtaType.Phone:
      return CtaPhone;
    case MenuCtaType.SearchField:
      return CtaSearch;
  }
  return null;
};

export const Cta: React.FC<CtaProps> = (props) => {
  const { type } = props;
  const baseClass = "last:pr-0";
  const paddingClass = "py-5 md:py-5 px-4";
  const textClass =
    "font-semibold text-left text-text-secondary hover:text-primary-200 leading-none";
  const transitionClass = "transition-text duration-200";

  const Component = getCtaComponent(type);
  const isButton = type === "button";
  const className = isButton ? baseClass : cx(baseClass, paddingClass, textClass, transitionClass);

  return Component && <Component {...props} className={className} />;
};
