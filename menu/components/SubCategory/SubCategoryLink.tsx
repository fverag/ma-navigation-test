import React from "react";
import cx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/pro-light-svg-icons/faAngleRight";
import { SubCategoryLinkProps } from "./types";

export const SubCategoryLink: React.FC<SubCategoryLinkProps> = ({ className, url, label }) => (
  <a href={url} className={cx("uppercase text-primary-200", className)}>
    <span className="inline-block mr-1">{label}</span>
    <FontAwesomeIcon icon={faAngleRight} />
  </a>
);
