import React from "react";
import ProductImage from "@/app/components/Products/ProductImage";
import ProductSliderOne from "@/app/components/Products/ProductSliderOne";

import FAQSection from "@/app/components/Products/ProductFaq";
import ProductInfo from "../../components/Products/ProductInfo";

const page = () => {
  return (
    <div>
      <ProductImage
        imageUrl="/productbelts.jpg"
        title="Crafted for confidence.Worn with pride."
      ></ProductImage>
      <ProductSliderOne category="belt" />
    

      <ProductInfo category="belt" />

      <FAQSection category="belt" />
    </div>
  );
};

export default page;
