import { GroupSettings, ImageElement } from "./common";

export interface MenuCategory {
  title: string;
  children: MenuColumn[];
}

export enum MenuColumnType {
  Alternative = "alternative",
  Regular = "regular",
}

export interface MenuColumn {
  type: MenuColumnType;
  children: MenuSubCategory[];
}

export interface MenuSubCategoryLink {
  className?: string;
  label: string;
  url: string;
}

export interface MenuSubCategory {
  title: string;
  link?: MenuSubCategoryLink | null;
  children: MenuItem[];
}

export interface MenuItem {
  title: string;
  url: string;
  subtitle?: string | null;
  chip?: string | null;
  image?: ImageElement | null;
}

export enum MenuCtaType {
  Button = "button",
  Phone = "phone",
  SearchField = "searchField",
}

export interface MenuCta {
  type: MenuCtaType;
  label: string;
  value: string;
  image: ImageElement | null;
}

export interface MenuHelpButton {
  label: string;
  url: string;
}

export interface MenuChildren {
  elements: MenuCategory[];
  ctas: MenuCta[];
  helpButton?: MenuHelpButton;
}

export interface MenuData {
  title: string;
  settings: GroupSettings;
  menu: MenuChildren;
}
