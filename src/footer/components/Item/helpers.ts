import { FooterItemUrlType } from "../../../types/footer";

export const contructItemUrl = (url: string, urlType: FooterItemUrlType): string => {
  const sanitizedUrl = url.trim();

  switch (urlType) {
    case FooterItemUrlType.Email:
      return `mailto:${sanitizedUrl}`;
    case FooterItemUrlType.Phone:
      return `tel:${sanitizedUrl}`;
    case FooterItemUrlType.Whatsapp:
      return `https://api.whatsapp.com/send?phone=${sanitizedUrl}`;
  }

  return sanitizedUrl;
};
