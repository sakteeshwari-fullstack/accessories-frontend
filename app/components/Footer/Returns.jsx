"use client";

import React from "react";

export default function ReturnExchange() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          RETURN & EXCHANGE
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-8 border border-gray-200">
          {/* 7-Day Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              7-DAY EXCHANGE & RETURN
            </h2>
            <p className="italic text-gray-600 mb-4">
              Because Your Experience Matters
            </p>
            <p className="text-gray-600">
              At <strong>RITTZACCESSORIES</strong>, we want you to love what
              you receive. That’s why we offer a{" "}
              <strong>7-day window</strong> for exchanges and returns on all
              eligible purchases.
            </p>
          </div>

          {/* Full-Priced Items */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
               Free Exchanges & Easy Returns (Full-Priced Items)
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Free Exchange:</strong> We’ll handle pickup and shipping
                at no extra cost.
              </li>
              <li>
                <strong>Easy Returns:</strong> For prepaid orders, the full
                amount will be refunded to your original payment method. For COD
                orders, refunds will be made via bank transfer.
              </li>
            </ul>
          </div>

          {/* Sale Items */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">
               Discounted or Sale Items
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Not eligible</strong> for refund under any circumstances
              </li>
              <li>
                <strong>Eligible</strong> for a one-time exchange within 7 days
                of delivery
              </li>
            </ul>
            <p className="mt-3 text-gray-700">For such exchanges:</p>
            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
              <li>Pickup will be arranged by us</li>
              <li>Pickup charge: ₹280</li>
              <li>
                Forward shipping charge: ₹120{" "}
                <span className="italic text-sm">
                  (Customers are required to bear these costs)
                </span>
              </li>
            </ul>
          </div>

          {/* Different Product Exchange */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
               Want to Exchange for a Different Product?
            </h3>
            <p className="text-gray-700">
              No problem! If the new item costs more, you can simply pay the
              difference. If it costs less, we’ll issue the balance as a gift
              card.
            </p>
          </div>

          {/* Initiate Return/Exchange */}
          <div>
            <h3 className="text-xl font-semibold  text-indigo-700 mb-2">
               How to Initiate a Return or Exchange
            </h3>
            <p className="text-gray-700">
              Simply write to us at{" "}
              <a
                href="mailto:sales@rittzaccessories.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                sales@rittzaccessories.com
              </a>{" "}
              within 7 days of receiving your order, and we’ll guide you through
              the next steps.
            </p>
          </div>

          {/* Footer Note */}
          <p className="text-center text-green-700 font-semibold text-lg mt-8">
             Free delivery pan India
          </p>
        </div>
      </div>
    </section>
  );
}
