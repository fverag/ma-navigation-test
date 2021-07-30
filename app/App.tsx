import React, { useEffect, useState } from "react";
import { Menu, MenuData, getMenuData } from "../src";

export const App: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setMenuData(
        await getMenuData({
          country: "cl",
          sectionOrBusinessUnit: null,
          enviroment: "staging",
        })
      );
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
