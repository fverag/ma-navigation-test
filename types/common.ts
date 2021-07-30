export type CountryCode = "ar" | "br" | "cl" | "co";

export enum NavigationType {
  Menu = "menu",
  Footer = "footer",
}

export interface ImageElement {
  id?: number;
  url: string;
  alt: string | null;
}

export interface GroupSettings {
  country: CountryCode;
  businessUnit: string | null;
  section: string | null;
}
