import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import { categories } from "../utils/catFilter";
import { getData } from "../utils/fetchData";
import { products } from "../utils/productsFake";

const SearchPage = () => {
  const selectRef = useRef();
  const [data, setData] = useState();

  const getCatData = (value) => {
    const filtered = categories.filter((category) => {
      return category.brand === value;
    });
    console.log(getData(filtered[0].id));
  };

  const filterSearch = (value) => {
    const copy = products;
    copy.filter((item) => {
      return item.name.includes(value);
    });
    console.log(copy);
  };

  return (
    <div className="search-page">
      <div className="logo">
        <div className="img"></div>
      </div>
      <div className="content">
        <div className="search-bar">
          <form action="">
            <select
              onClick={(e) => {
                getCatData(e.target.value);
              }}
              ref={selectRef}
              name=""
              id=""
            >
              {categories.map((category) => {
                return <option>{category.brand}</option>;
              })}
            </select>
            <input
              onChange={(e) => {
                filterSearch(e.target.value);
              }}
              type="text"
            />
            <button>Search</button>
          </form>
        </div>
        <div className="listings">
          {products.map((product) => {
            return (
              <div className="card">
                <img src={product.imageUrl} alt="" />
                <div className="text">
                  <h3>{product.name}</h3>
                  <h4>{product.price.current.text}</h4>
                </div>
                <button>Favourite</button>
              </div>
            );
          })}
        </div>
      </div>
      <nav className="nav"></nav>
    </div>
  );
};

export default SearchPage;
