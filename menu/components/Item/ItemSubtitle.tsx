import React from "react";
import { ItemSubtitleProps } from "./types";

export const ItemSubtitle: React.FC<ItemSubtitleProps> = ({ subtitle }) => (
  <p className="w-full md:max-w-52 mt-2 md:mt-1 text-sm leading-5">{subtitle}</p>
);
