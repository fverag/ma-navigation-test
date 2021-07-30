import React, { useState } from "react";
import cx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/pro-regular-svg-icons";
import { MenuProps } from "./types";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { Cta } from "../Cta";
import { HelpButton } from "../HelpButton";
import { Overlay } from "../Overlay";

export const Menu: React.FC<MenuProps> = ({
  data: {
    menu: { elements, ctas, helpButton },
  },
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [hasCategoryOpen, setHasCategoryOpen] = useState<boolean>(false);
  const hasCtas = Boolean(ctas && ctas.length);
  const navClass = cx({
    "max-h-0": !isOpen,
    "max-h-68": isOpen && !hasCategoryOpen,
    "max-h-360": isOpen && hasCategoryOpen,
  });

  return (
    <section className="test-menu border-b border-grey-300">
      <div className="menu-root bg-white flex flex-wrap md:flex-nowrap justify-between md:max-w-7xl mx-auto md:px-6 lg:px-0 z-30 relative">
        <Logo />
        <Nav className={navClass} setHasCategoryOpen={setHasCategoryOpen} categories={elements}>
          {helpButton && <HelpButton {...helpButton} />}
        </Nav>
        <div className="flex justify-between items-center">
          {hasCtas && (
            <div className="flex order-1 md:order-none">
              {ctas.map((cta, index) => (
                <Cta key={index} {...cta} />
              ))}
            </div>
          )}
          {hasCtas && (
            <div className="w-px h-3/5 my-4 ml-4 bg-grey-200 md:hidden order-3 md:order-none md:ml-0" />
          )}
          <button
            data-testid="menu-button"
            type="button"
            className="md:hidden w-15 h-16 p-4 text-xl leading-none order-4 focus:outline-none md:order-none"
            onClick={() => setOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-grey-600"
              size="1x"
              data-testid="menu-icon-button"
            />
          </button>
        </div>
      </div>
      <Overlay isOpen={isOpen} />
    </section>
  );
};
