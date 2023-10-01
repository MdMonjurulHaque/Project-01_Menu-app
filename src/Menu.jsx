import React from "react";
import "./menu.css";

const Menu = ({ items }) => {
  return (
    <div className="section-container">
      {items.map((item) => {
        const { id, iteam, name, img, price, desc } = item;
        return (
          <article key={id} className="article-container">
            <div className="img-container">
              <img src={img} alt={name} />
            </div>

            <div className="food-info">
              <div className="name-price">
                <h4>{name}</h4>
                <p className="price">${price}</p>
              </div>

              <p className="desc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
