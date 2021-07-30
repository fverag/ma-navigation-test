import React from "react";
import cx from "clsx";
import { ItemProps } from "./types";
import { ItemImage } from "./ItemImage";
import { ItemChip } from "./ItemChip";
import { ItemTitle } from "./ItemTitle";
import { ItemSubtitle } from "./ItemSubtitle";
import { ItemTextContainer } from "./ItemTextContainer";

export const Item: React.FC<ItemProps> = ({ title, url, subtitle, chip, image, isAlternative }) => {
  const baseClass =
    "flex justify-start items-stretch last:mb-0 px-4 md:px-0 md:py-0 text-text-primary group";
  const typeClass = isAlternative ? "py-0 mt-5 mb-5 md:mt-0" : "flex-wrap py-3 mb-2 md:mb-8";

  const commonProps = {
    isAlternative,
    hasChip: Boolean(chip),
  };

  return (
    <a href={url} className={cx(baseClass, typeClass)}>
      <ItemImage image={image} isAlternative={isAlternative} />

      <ItemTextContainer {...commonProps}>
        <ItemTitle title={title} {...commonProps} />
        {subtitle && <ItemSubtitle subtitle={subtitle} />}
        {chip && <ItemChip chip={chip} />}
      </ItemTextContainer>
    </a>
  );
};
