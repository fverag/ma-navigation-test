import React from "react";
import { ItemProps } from "./types";
import { FooterItemType } from "../../../types/footer";
import { ItemButton } from "./ItemButton";
import { ItemImage } from "./ItemImage";
import { ItemLink } from "./ItemLink";
import { ItemText } from "./ItemText";

const isValidItem = (props: ItemProps): boolean => {
  const { url, type } = props;

  if ((type === FooterItemType.Link || type === FooterItemType.Button) && !url) {
    return false;
  }

  return true;
};

const solveItemComponent: React.FC<ItemProps> = (props) => {
  const { type } = props;

  switch (type) {
    case FooterItemType.Link:
      return <ItemLink {...props} />;
    case FooterItemType.Text:
      return <ItemText {...props} />;
    case FooterItemType.Image:
      return <ItemImage {...props} />;
    case FooterItemType.Button:
      return <ItemButton {...props} />;
  }

  return null;
};

export const Item: React.FC<ItemProps> = (props) => {
  const isValid = isValidItem(props);

  if (!isValid) {
    return null;
  }

  return solveItemComponent(props);
};
