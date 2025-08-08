"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeatherGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".leather-section") as HTMLElement[];
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fffaf5] py-10 px-4 lg:px-32">
      {/* Your grid content stays unchanged */}
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Left Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers1.png"
              alt="Wallet 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers2.png"
              alt="Wallet 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Style And Quality Unleashed
            </h2>
            <p className="mb-3">
             Experience the luxurious allure of our premium leather belts, crafted by the best premium leather manufacturers in India. Our belts, made by top leather manufacturing companies, epitomize impeccable craftsmanship and functionality, enhancing your everyday style.
            </p>
            <p className="mb-3">
            Indulge in the superior quality offered by leading leather product manufacturers, renowned for their dedication to genuine leather products. Our collection reflects the expertise of the best premium leather manufacturers in India, ensuring each piece meets the highest standards.
            </p>
             <p className="mb-3">
           As a leading name among premium leather manufacturers, we pride ourselves on creating custom leather goods that cater to your unique style. Trust the best in the industry to provide leather belts that combine luxury and practicality seamlessly.
            </p>
             <p className="mb-3">
           Choose excellence with custom leather goods manufacturers and experience the unparalleled quality and sophistication that only the best leather companies can deliver. Let our products, crafted by top leather goods manufacturers, elevate your wardrobe with timeless elegance and unmatched durability.
            </p>
            {/* Additional paragraphs truncated for brevity */}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Belt
            </button>
          </div>
          <hr className="my-6 w-1/4 mx-auto border-gray-600" />

        </div>

        {/* Right Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers3.png"
              alt="Bag 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers4.png"
              alt="Bag 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Left Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Stitched Toward Luxury
            </h1>
            <p className="mb-4">
            Discover the epitome of organization and security with our premium leather wallets. Crafted with unmatched precision and attention to detail, our wallets perfectly blend style and functionality. As one of the best premium leather product manufacturers in India, we pride ourselves on being among the best leather companies in India.
            </p>
            <p className="mb-4">
              Our collection showcases the expertise of premium leather manufacturers, ensuring every piece is made from the highest quality materials. Whether you seek genuine leather products or custom leather goods, our range caters to all your needs, backed by the craftsmanship of best leather product manufacturers in India.
            </p>
            <p className="mb-4">
              We collaborate with the best leather companies in india to bring you products that excel in durability and elegance. As a prominent leather goods manufacturer, we are dedicated to producing items that not only meet but exceed your expectations. Trust the best leather product manufacturing companies in India for wallets that reflect luxury and sophistication.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Wallet
            </button>
          </div>
          <hr className="my-6 w-1/4 mx-auto border-gray-600" />

        </div>

        {/* Center Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers5.png"
              alt="Belt 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers6.png"
              alt="Belt 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Exclusive & Handcrafted
            </h2>
            <p className="mb-3">
            Discover a stunning collection of exclusive handcrafted leather bags designed to suit every style and need. At Rittz Accessories, one of the best premier leather manufacturers in India, we take pride in offering genuine leather products crafted to perfection. Whether you need a spacious tote, a chic clutch, or a versatile crossbody, our collection has something for everyone.
            </p>
            <p className="mb-3">
As a leading name in the leather manufacturing industry, Rittz Accessories exemplifies quality and craftsmanship. Our range of custom leather goods is meticulously created by the best artisans in India, ensuring luxury and elegance in every piece. Choose from our premium leather products and experience the superior craftsmanship that makes us one of the best leather product manufacturing companies in India.

            </p>
            <p className="mb-3">
Elevate your style with Rittz Accessories, where tradition meets contemporary design, offering you the finest in leather craftsmanship.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Bag
            </button>
          </div>
        <hr className="my-6 w-1/4 mx-auto border-gray-600" />

        </div>
      </div>
    </div>
  );
};

export default LeatherGrid;
