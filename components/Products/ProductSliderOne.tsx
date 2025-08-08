"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye, Link as LinkIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { productsData } from "@/data/productData";

interface ProductSliderProps {
  category: "belt" | "wallet" | "bag";
}

export default function ProductSlider({ category }: ProductSliderProps) {
  const products = productsData[category];

  const categoryHeadings: Record<ProductSliderProps["category"], string> = {
    belt: "Casual Belts - 40mm",
    wallet: "Wallets - Slim Bifold",
    bag: "Work Bags",
  };

  return (
    <div className="w-full py-14 px-4 md:px-10 bg-white">
      <h2 className="text-4xl font-semibold mb-10 text-gray-800">
        {categoryHeadings[category]}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Product Image with Hover Effect */}
            <div className="relative h-64 bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-6 transition-opacity duration-300 group-hover:opacity-0"
              />
              {item.hoverImage && (
                <Image
                  src={item.hoverImage}
                  alt={item.name + " Hover"}
                  fill
                  className="object-contain p-6 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <div className="flex border-t pt-3 mt-3 border-gray-200">
                <Link
                  href={item.link}
                  className="w-1/2 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 flex justify-center items-center gap-2 text-sm font-medium transition"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Link>
                <Link
                  href={item.link}
                  className="w-1/2 text-center bg-orange-400 hover:bg-orange-500 text-white py-2 flex justify-center items-center gap-2 text-sm font-medium transition"
                >
                  <LinkIcon className="w-4 h-4" />
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider with Star and Buttons */}
      <div className="flex flex-col items-center mt-14">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/custom-quote"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow"
          >
            🧾 Request a Custom Quote
          </Link>
          <Link
            href="https://wa.me/9150347733"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow"
          >
            <FaWhatsapp className="w-5 h-5" />
            Message Now
          </Link>
        </div>

        {/* Star Divider */}
        <div className="flex items-center w-full max-w-4xl px-4">
          <hr className="flex-grow border-t border-gray-400" />
          <div className="mx-4 text-orange-500 text-xl">⭐</div>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
      </div>
    </div>
  );
}
