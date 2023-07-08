import React, { useState, useEffect } from "react";
import { categories } from "../utils/catFilter";

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="logo">
        <div className="img"></div>
      </div>
      <div className="content">
        <div className="search-bar">
          <select name="" id="">
            {categories.map((category) => {
              return <option>{category.brand}</option>;
            })}
          </select>
          <input type="text" />
        </div>
        <div className="listings">
          <div className="card">
            <img src="" alt="" />
            <div className="text">
              <h3>Product Name</h3>
              <h4>Product Price</h4>
            </div>
            <button>Favourite</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="text">
              <h3>Product Name</h3>
              <h4>Product Price</h4>
            </div>
            <button>Favourite</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="text">
              <h3>Product Name</h3>
              <h4>Product Price</h4>
            </div>
            <button>Favourite</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="text">
              <h3>Product Name</h3>
              <h4>Product Price</h4>
            </div>
            <button>Favourite</button>
          </div>
        </div>
      </div>
      <nav className="nav"></nav>
    </div>
  );
};

export default SearchPage;
