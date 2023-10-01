import React from "react";
import './categories.css'

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="container-btn">
      {categories.map((category, index) => {
        return (
          <button
          
            type="button"
            key={index}
            className="categories-btn"
            onClick={() => 
              filterCategory(category)
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
