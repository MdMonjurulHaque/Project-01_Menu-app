import React, { useState } from "react";
import "./app.css";
import data from "./data";

import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.iteam))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.iteam === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <header>
        <h2>Our Menu</h2>

        <div className="underline"></div>
      </header>
      <main>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </main>
    </div>
  );
};

export default App;
