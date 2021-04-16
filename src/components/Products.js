import React from "react";
import Product from "./Product";

const Products = (props) => {
  console.log(props);
  return props.data.map((data, i) => (
    <Product
      name={data.name}
      img={data.display_image}
      pid={data.pid}
      artist={data.artist}
      category={data.category}
      subcategory={data.subcategory}
      price={data.kalafex_price}
      key={i}
    />
  ));
};

export default Products;
