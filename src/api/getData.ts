import { NavigationType, MenuData, FooterData, DataGetterArgs, GetDataArgs } from "../types";

const getApiEndpoint = ({
  type,
  country,
  sectionOrBusinessUnit,
  enviroment,
}: GetDataArgs): string => {
  const envBaseUrl =
    enviroment === "production" ? "cms.comparaonline.com" : "cms-staging.comparaonline.com";
  const cmsUrl = `https://${envBaseUrl}/wp-json/compara`;

  return `${cmsUrl}/v2/${type}?country=${country}${
    sectionOrBusinessUnit ? `&businessUnit=${sectionOrBusinessUnit}` : ""
  }`;
};

const getData = async <Type>({
  type,
  country,
  sectionOrBusinessUnit,
  enviroment,
}: GetDataArgs): Promise<Type | null> => {
  const endpoint = getApiEndpoint({
    type,
    country,
    sectionOrBusinessUnit,
    enviroment,
  });

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

export const getMenuData = async ({
  country,
  sectionOrBusinessUnit,
  enviroment,
}: DataGetterArgs): Promise<MenuData | null> => {
  return await getData({
    type: NavigationType.Menu,
    country,
    sectionOrBusinessUnit,
    enviroment,
  });
};

export const getFooterData = async ({
  country,
  sectionOrBusinessUnit,
  enviroment,
}: DataGetterArgs): Promise<FooterData | null> => {
  return await getData({
    type: NavigationType.Footer,
    country,
    sectionOrBusinessUnit,
    enviroment,
  });
};
