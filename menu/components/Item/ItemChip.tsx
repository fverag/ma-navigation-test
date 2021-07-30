import React from "react";
import { ItemProps } from "./types";

export const ItemChip: React.FC<{ chip: ItemProps["chip"] }> = ({ chip }) => (
  <span className="uppercase rounded-full bg-grey-200 text-primary-200 font-semibold text-xxs px-3 py-2 tracking-wider leading-none">
    {chip}
  </span>
);
