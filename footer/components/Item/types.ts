import { FooterItem } from "../../../types/footer";

export interface ItemProps extends FooterItem {
  className?: string;
  isOnlyChild?: boolean;
}
