import { MenuSubCategoryLink, MenuSubCategory } from "../../../types/menu";

export interface SubCategoryProps extends MenuSubCategory {
  isAlternative: boolean;
}

export type { MenuSubCategoryLink as SubCategoryLinkProps };
