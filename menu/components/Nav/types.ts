import { MenuCategory } from "../../../types/menu";

export type SetHasCategoryOpenFunction = (hasCategoryOpen: boolean) => void;

export interface NavProps {
  className?: string;
  categories: MenuCategory[];
  setHasCategoryOpen: SetHasCategoryOpenFunction;
}
