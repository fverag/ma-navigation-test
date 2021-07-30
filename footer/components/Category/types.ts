import { FooterCategory } from "../../../types/footer";

export type CurrentCategoryState = number | null;
export type setCurrentCategory = (category: CurrentCategoryState) => void;

export interface CategoryProps extends FooterCategory {
  index: number;
  isOnlyChild?: boolean;
  isCollapsable?: boolean;
  setCurrentCategory: setCurrentCategory;
  currentCategory: CurrentCategoryState;
}
