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

export type Enviroment = "staging" | "production";

export interface DataGetterArgs {
  country: CountryCode;
  sectionOrBusinessUnit: string | null;
  enviroment: Enviroment;
}

export interface GetDataArgs extends DataGetterArgs {
  type: NavigationType;
}
