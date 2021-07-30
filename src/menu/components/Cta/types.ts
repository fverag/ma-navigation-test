import { MenuCta } from "../../../types/menu";

type withClassName = { className?: string };
export type CtaProps = MenuCta & withClassName;
export type CtaButtonProps = Pick<CtaProps, "label" | "value" | "className">;
export type CtaPhoneProps = Pick<CtaProps, "label" | "value" | "image" | "className">;
export type CtaSearchProps = Pick<CtaProps, "label" | "image" | "className">;
export type CtaImageProps = Pick<CtaProps, "image" | "className">;
