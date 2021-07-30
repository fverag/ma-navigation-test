//import getConfig from "next/config";
import { NavigationType, MenuData, FooterData } from "../types";

const getApiEndpoint = (
  type: NavigationType,
  countryCode: string,
  businessUnit?: string | null
): string => {
  const cms = "https://cms-staging.comparaonline.com/wp-json/compara";

  return `${cms}/v2/${type}?country=${countryCode}${
    businessUnit ? `&businessUnit=${businessUnit}` : ""
  }`;
};

const getData = async <Type>(
  type: NavigationType,
  countryCode: string,
  businessUnit: string
): Promise<Type | null> => {
  const endpoint = getApiEndpoint(type, countryCode, businessUnit);

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
      if (!response[type]) {
        return null;
      }

      return response as Type;
    })
    .catch(() => {
      return null;
    });
};

export const getMenuData = async (): Promise<MenuData | null> => {
  return await getData(NavigationType.Menu, "cl", null);
};

export const getFooterData = async (): Promise<FooterData | null> => {
  return await getData(NavigationType.Footer, "cl", null);
};
