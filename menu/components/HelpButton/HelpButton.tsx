import React from "react";
import { HelpButtonProps } from "./types";

export const HelpButton: React.FC<HelpButtonProps> = ({ label, url }) => (
  <div className="py-6 text-center md:hidden">
    <a
      className="py-2 px-7 max-w-full uppercase text-primary-200 text-sm font-semibold tracking-widest border border-primary-200 rounded-3xl"
      href={url}
    >
      {label}
    </a>
  </div>
);
