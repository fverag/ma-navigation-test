import React from "react";
import { buildURL } from "../../../helpers/image/cloudinary";
import { CLOUDINARY_LOGO_ID } from "./constants";

const logoUrl = buildURL(CLOUDINARY_LOGO_ID);

export const Logo: React.FC = () => (
  <a href="/" className="flex content-center pl-4 md:pl-0 h-16">
    <img alt="Compara home" src={logoUrl} width="148" height="64" />
  </a>
);
