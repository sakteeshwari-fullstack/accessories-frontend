"use client";

import React from "react";

export default function ShippingPolicy() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          SHIPPING POLICY
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 space-y-10">
          {/* Shipping Partners */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
               Shipping Partners & Timeline
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use trusted third-party courier partners like <strong>Bluedart</strong>, <strong>Xpressbees</strong>,
              <strong> Delhivery</strong>, etc. for shipping the products purchased on the website.
              Delivery time may vary based on location, typically ranging from <strong>2–7 days</strong> from
              the date of order placement.
            </p>
            <p className="mt-3 text-gray-700">
              After your payment is verified, please allow up to <strong>24 hours</strong> for order
              processing and dispatch (excluding weekends and holidays).
            </p>
            <p className="mt-3 text-gray-700">
              Orders placed after <strong>9 AM IST</strong> will be shipped the next business day. Orders
              after 9 AM IST on Fridays are likely shipped on the following Monday.
            </p>
          </div>

          {/* Shipping Charges */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Shipping Charges</h2>
            <p className="text-gray-700 leading-relaxed">
              Shipping charges are displayed during checkout and are determined by our third-party
              courier services. RITTZ ACCESSORIES has no control over these charges and provides them
              to you on an <strong>“as is” and “as available”</strong> basis.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3"> Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of delay, loss, or damage during shipping, our liability is limited to:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-gray-700">
              <li>
                <strong>Replacement</strong> of the product within 7 days from the date the request
                (which must be made within 7 days of the incident) is submitted.
              </li>
              <li>
                Or, <strong>refund</strong> of the amount paid for the affected product.
              </li>
            </ul>
          </div>

          {/* Force Majeure */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              RITTZ ACCESSORIES shall not be held liable for non-performance, delay, or hindrance of
              contract obligations due to circumstances beyond our reasonable control. These may include:
            </p>
            <ul className="list-disc list-inside mt-3 ml-4 text-gray-700 space-y-2">
              <li>Natural disasters (earthquakes, floods, storms, etc.)</li>
              <li>Governmental or regulatory actions</li>
              <li>Wars, riots, or civil unrest</li>
              <li>Public service outages or strikes</li>
              <li>Technology or equipment failure</li>
              <li>Acts of God or unforeseen pandemics</li>
            </ul>
            <p className="mt-3 text-gray-700">
              In such events, our obligations will be suspended during the force majeure duration.
            </p>
          </div>

          {/* Closing Note */}
          <p className="text-center text-green-700 font-semibold mt-6">
            Thank you for choosing RITTZ ACCESSORIES. We’re committed to delivering your orders safely and promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
