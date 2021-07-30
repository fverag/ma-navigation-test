import React, { useEffect, useState } from "react";
import { Menu, MenuData } from "../menu/index";
import { getMenuData } from "../api";

export const App: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setMenuData(await getMenuData());
    };

    loadData();
  }, []);

  return (
    <main>
      {menuData && <Menu data={menuData} />}
      <p>Content</p>
    </main>
  );
};
