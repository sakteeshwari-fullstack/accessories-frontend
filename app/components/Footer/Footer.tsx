"use client";

import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2b1609] dark text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <Image
            src="/rittz-access-logo.png"
            alt="Rittz Logo"
            width={200}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Rittz Accessories is your trusted partner for premium leather belts, wallets, and bags,
            crafted with unmatched quality and style.
            <br />
            <span className="text-orange-500 font-medium cursor-pointer hover:underline">
              Read More...
            </span>
          </p>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Belt</li>
            <li>Bags</li>
            <li>Wallets</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-orange-500" />
              <span>
                +91-442247 7167 | +91-98410 49993<br />
                +91-98410 97997
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              sales@rittzaccessories.com
            </p>
          </div>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-orange-500 mt-1" />
              Chromepet, Chennai, Tamil Nadu, India
            </li>
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-orange-500 mt-1" />
              7653, 116th Ave SE, Newcastle 98056, United States
            </li>
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-orange-500 mt-1" />
              Unit 615–51, Lower Simcoe Street, Toronto ON M5J 3A2, Canada
            </li>
          </ul>
        </div>
      </div>

      {/* Policy Links */}
      <div className="mt-10 text-center text-sm text-gray-400 space-x-4">
        <a href="/terms-of-use" className="hover:text-orange-500">Terms of Use</a>
        <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a>
        <a href="/shipping-policy" className="hover:text-orange-500">Shipping Info</a>
        <a href="/return-exchange" className="hover:text-orange-500">Return & Exchange</a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4">
        Copyright © 2025 Rittz Accessories | Powered by{" "}
        <span className="text-orange-500 font-medium hover:underline cursor-pointer">
          Rittz Digital
        </span>
      </div>
    </footer>
  );
}
