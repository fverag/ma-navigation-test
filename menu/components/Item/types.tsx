import { MenuItem } from "../../../types/menu";

interface ItemIsAlternative {
  isAlternative: boolean;
}

interface ItemHasChip {
  hasChip: boolean;
}

export type ItemProps = MenuItem & ItemIsAlternative;
export type ItemImageProps = Pick<ItemProps, "image" | "isAlternative">;
export type ItemTitleProps = Pick<ItemProps, "title" | "isAlternative"> & ItemHasChip;
export type ItemTextContainerProps = ItemHasChip & ItemIsAlternative;
export type ItemSubtitleProps = Pick<ItemProps, "subtitle">;
