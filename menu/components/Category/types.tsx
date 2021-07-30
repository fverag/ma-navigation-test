import { MenuCategory } from "../../../types/menu";
import { SetHasCategoryOpenFunction } from "../Nav/types";

type CurrentCategory = number | null;
type SetCurrentCategoryFunction = (currentCategory: CurrentCategory) => void;

export interface CategoryProps extends MenuCategory {
  categoryIndex: number;
  currentCategory: CurrentCategory;
  setCurrentCategory: SetCurrentCategoryFunction;
  setHasCategoryOpen: SetHasCategoryOpenFunction;
}

export interface CategoryStateSetter {
  categoryIndex: number;
  setCurrentCategory: SetCurrentCategoryFunction;
  currentCategory: CurrentCategory;
  setHasCategoryOpen: SetHasCategoryOpenFunction;
}

export interface CategoryButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
  isOpen: boolean;
}

export interface CategoryPanelProps {
  className?: string;
  shapeClass?: string;
  transitionClass?: string;
}
