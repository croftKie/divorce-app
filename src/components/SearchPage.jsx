import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import { categories } from "../utils/catFilter";
import { getData } from "../utils/fetchData";
import { products } from "../utils/productsFake";

const SearchPage = () => {
  const selectRef = useRef();
  const [data, setData] = useState({ products: [] });

  const getCatData = async (value) => {
    const filtered = categories.filter((category) => {
      return category.brand === value;
    });
    const data = await getData(filtered[0].id);
    setData({ products: data.products });
  };

  const filterSearch = (value) => {
    const copy = data;
    const filtered = copy.products.filter((item) => {
      return item.name.includes(value);
    });
    setData({ products: filtered });
  };
  console.log(data);
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
              placeholder="look for a product"
            />
          </form>
        </div>
        <div className="listings">
          {data.products.map((product) => {
            return (
              <div className="card">
                <h3>{product.name}</h3>
                <h4>{product.price.current.text}</h4>
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
