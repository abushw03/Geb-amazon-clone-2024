import React from "react";
import LayOut from "../../Components/LayOut/LayOut.js"
import Carousel from "../../Components/Carousel/CarouselEffect.js"
import Category from "../../Components/Category/Category.js";
import Product from "../../Components/Product/Product.js";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
