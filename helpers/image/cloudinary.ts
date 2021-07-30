const URL_BASE = "https://res.cloudinary.com";
const URL_SEPARATORS = "image/upload/|compara/images/";

const regex = new RegExp(`${URL_BASE}.*${URL_SEPARATORS}`);

const buildTransformationPath = (transformation: string[]): string =>
  transformation.length > 0 ? transformation.join() + "/" : "";

const urlHasTransformations = (url: string): boolean => {
  const transfRegex = new RegExp(`(${URL_SEPARATORS})v[0-9]+`);
  return !transfRegex.test(url);
};

export const buildDensities = (src: string, densities = [1, 2, 4]): string => {
  const baseRegex = new RegExp(`${URL_SEPARATORS}`);
  const hasTransf = urlHasTransformations(src);
  const closure = hasTransf ? "," : "/";

  return densities
    .map(
      (density) =>
        `${src.replace(baseRegex, (match) => {
          return `${match}dpr_${density}${closure}`;
        })} ${density}x`
    )
    .join(", ");
};

export const buildURL = (url: string, transformations: string[] = []): string => {
  if (url) {
    const match = url.match(regex);
    if (match) {
      const separator = match![0];
      const urlParts = url.split(separator);
      return urlParts.length === 2
        ? `${urlParts[0]}${separator}${buildTransformationPath(transformations)}${urlParts[1]}`
        : url;
    }
  }
  return url;
};
