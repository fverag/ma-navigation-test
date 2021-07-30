import { GroupSettings, ImageElement } from "./common";

export enum FooterElementType {
  Category = "category",
  Column = "column",
  Item = "item",
}

export enum FooterItemType {
  Button = "button",
  Image = "image",
  Link = "link",
  Text = "text",
}

export enum FooterItemUrlType {
  Email = "email",
  Link = "link",
  Phone = "phone",
  Whatsapp = "whatsapp",
}

export interface FooterRow {
  title?: string;
  children: FooterCategory[];
}

export enum FooterCategoryWidth {
  Regular = "regular",
  Wide = "wide",
  ExtraWide = "extra-wide",
}

export interface FooterCategory {
  title?: string;
  children: FooterItem[];
  horizontal?: boolean;
  width?: FooterCategoryWidth;
}

export interface FooterItem {
  label: string;
  preLabel?: string;
  type: FooterItemType;
  subtitle?: string;
  url: string | null;
  urlType: FooterItemUrlType;
  image: ImageElement | null;
  isBold?: boolean;
  children: null;
}

export interface FooterChildren {
  elements: FooterRow[];
}

export interface FooterData {
  title: string;
  settings: GroupSettings;
  footer: FooterChildren;
}

export type FooterMember = FooterRow | FooterCategory | FooterItem;
