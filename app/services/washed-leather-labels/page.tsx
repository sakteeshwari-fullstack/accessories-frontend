import React from 'react'
import ProductImage from "../../../components/Products/ProductImage";
import WashedLeatherLabelsCTA from '../../../components/Products/WashedLeatherLabelsCTA';
import WashedLeatherLabelsFeatures from '../../../components/Products/WashedLeatherLabelsFeatures';
import LeatherLabelIndustries from '../../../components/Products/LeatherLabelIndustries';

const page = () => {
  return (
    <div>
       <ProductImage
              imageUrl="/productwashing-labels.jpg"
              title="Crafted by Time. Defined by Texture. Built for Legacy."
            ></ProductImage>
            <WashedLeatherLabelsFeatures></WashedLeatherLabelsFeatures>
            <WashedLeatherLabelsCTA></WashedLeatherLabelsCTA>
            <LeatherLabelIndustries></LeatherLabelIndustries>
    </div>
  )
}

export default page
