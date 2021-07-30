import React from "react";
import cx from "clsx";
import { OverlayProps } from "./types";

export const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  const visibilityClass = {
    "bg-opacity-25 h-full": isOpen,
    "bg-opacity-0 h-0 ": !isOpen,
  };

  return (
    <div
      className={cx(
        "md:hidden bg-grey-700 w-full fixed z-20 left-0 top-0 delay-75 transition-colors duration-300",
        visibilityClass
      )}
    />
  );
};
