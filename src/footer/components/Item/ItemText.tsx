import React from "react";
import cx from "clsx";
import { ItemProps } from "./types";

export const ItemText: React.FC<ItemProps> = ({ className, label, subtitle, isBold }) => {
  const baseClass = "block text-text-primary text-sm whitespace-pre-wrap";
  const itemClass = cx(className, baseClass);
  const labelClass = cx("block", {
    "font-semibold": isBold,
  });
  const labelText = label ? label.trim() : null;

  return (
    <p className={itemClass}>
      <span className={labelClass}>{labelText}</span>
      {subtitle && <span className="block">{subtitle}</span>}
    </p>
  );
};
