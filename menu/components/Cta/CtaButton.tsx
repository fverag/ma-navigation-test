import React from "react";
import { CtaButtonProps } from "./types";

export const CtaButton: React.FC<CtaButtonProps> = ({ className, label, value }) => (
  <div className={className}>
    <a
      href={value}
      className="py-2 px-7 max-w-full uppercase text-primary-200 text-sm font-semibold tracking-widest border border-primary-200 rounded-3xl"
    >
      {label}
    </a>
  </div>
);
