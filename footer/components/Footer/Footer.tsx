import React from "react";
import { FooterProps } from "./types";
import { Row } from "../Row";

export const Footer: React.FC<FooterProps> = ({
  data: {
    footer: { elements },
  },
}) => {
  const elementsQuantity = elements.length;

  return (
    <footer className="bg-grey-200 pt-6 md:pt-16">
      <div className="md:mx-auto md:max-w-screen-lg">
        {elements.map((row, index) => (
          <Row {...row} key={index} index={index} quantity={elementsQuantity} />
        ))}
      </div>
    </footer>
  );
};
