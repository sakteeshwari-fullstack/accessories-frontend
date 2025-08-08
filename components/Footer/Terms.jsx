"use client"
import  { useState } from 'react';
import Image from "next/image";
import logo from "@/public/rittz-access-logo.png";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'user-information', title: 'User Information' },
    { id: 'commercials', title: 'Commercials' },
    { id: 'delivery', title: 'Delivery' },
    { id: 'return-cancellation', title: 'Return & Cancellation' },
    { id: 'prohibited-actions', title: 'Prohibited Actions' },
    { id: 'personal-information', title: 'Personal Information' },
    { id: 'complaints', title: 'Complaints' },
    { id: 'governance', title: 'Governance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Terms of Use</h1>
              <p className="text-gray-600 mt-2">Effective Date: August 5, 2025</p>
            </div>
            <div className="flex items-center">
      <div className="w-16 h-16 relative">
        <Image
          src={logo}
          alt="Rittz Digital Logo"
          fill
          className="object-contain rounded-xl border-2 border-dashed"
        />
      </div>
      <div className="ml-4">
        <h2 className="font-semibold text-gray-800">Rittz Accessories</h2>
        <p className="text-sm text-gray-600">
          Company Trade License: 009/2024/010/0002853
        </p>
      </div>
    </div>
          </div>
          
          <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <p className="text-gray-700">
              These terms govern your use of www.rittzaccessories.com and form a binding contract between you and 
              Rittz Accessories. By using our website, you agree to these terms unconditionally.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 cursor-pointer rounded-lg transition-colors ${
                        activeSection === section.id 
                          ? 'bg-indigo-600 text-white font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">CRM:</span>
                    Mr. Raghav Kalani
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Phone:</span>
                    98410 49993
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Email:</span>
                    sales@rittaccessories.com
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Address:</span>
                    1A and 3A, Sridharan St, Periyar Nagar, Nagalkeni, Chromepet, Chennai, Tamil Nadu 600044
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Introduction */}
              {activeSection === 'introduction' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      These terms of use govern your purchases from, and your use of, the
                      www.rittzaccessories.com website and form a contract between you and H Rittz Accessories, 
                      an Indian company with the Company Trade License Number 009/2024/010/0002853, 
                      having registered office at 1A and 3A, Sridharan St, Periyar Nagar, Nagalkeni, 
                      Chromepet, Chennai, Tamil Nadu 600044 (hereinafter "Rittz Accessories"). 
                    </p>
                    <p>
                      By making a purchase from, and using, this website you have agreed to these 
                      terms of use unconditionally, and you shall be bound by the same as also other 
                      documents on the website similar to a legal document. Please make sure that you 
                      have read and understood these terms of use when using our website.
                    </p>
                    <p>
                      Rittz Accessories is the licensed owner of the domain name https://rittaccessories.com/, 
                      the content of this Website - which shall include but not limited to design, layout, 
                      text, images, graphics, sound, video etc.
                    </p>
                    <p>
                      This Terms of Use document is published in accordance with the provisions of Rule 3(1) of
                      the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code)
                      Rules, 2021 that require publishing the rules and regulations, privacy policy and Terms of
                      Use for access or usage of domain name www.rittzaccessories.com.
                    </p>
                    <p>
                      For the purpose of this Terms of Use, wherever the context so requires "You" or "User" 
                      shall mean any natural or legal person who has agreed to become a buyer/potential on 
                      the website by registering on the website. Rittz Accessories allows the User to surf the 
                      website or making purchases without registering on the website. The term "We", "Us", "Our" 
                      shall mean Rittz Accessories.
                    </p>
                    <p>
                      This Terms of Use document is to be read in consonance with the terms of use and
                      other documents on this website/platform.
                    </p>
                  </div>
                </div>
              )}

              {/* Eligibility */}
              {activeSection === 'eligibility' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      Transaction on the website is available only to persons who can form legally binding
                      contracts under Indian Contract Act, 1872. Persons who are "incompetent to contract" within
                      the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not
                      eligible to use the website.
                    </p>
                    <p>
                      If you are a minor i.e. under the age of 18 years, you may use the website or access 
                      content on the website only under the supervision and prior consent/permission of a 
                      parent or legal guardian.
                    </p>
                    <p>
                      As a minor if you wish to transact on the website, such transaction on the website may be
                      made by your legal guardian or parents. Rittz Accessories reserves the right to terminate your 
                      membership and / or refuse to provide you with access to the website if it is brought to 
                      Rittz Accessories notice or if it is discovered that You are under the age of 18 years and 
                      transacting on the website.
                    </p>
                  </div>
                </div>
              )}

              {/* User Information */}
              {activeSection === 'user-information' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">User Information</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      (a) The User wishes to gain, for his own use, more information about Rittz Accessories and its
                      services/ products offered through this website, and also the other information
                      regarding the market practices, policies, opinions etc., incidental to the products
                      offered through this website.
                    </p>
                    <p>
                      (b) The User wishes to gain, for his own use, more information about Rittz Accessories and its 
                      products offered through this website, and also the other information regarding the
                      market practices, policies, opinions etc., incidental to the products offered through
                      this website.
                    </p>
                    <p>
                      (c) All personal information entered by the User in using this website and while
                      registering in the website is done voluntarily.
                    </p>
                    <p>
                      (d) In using the website, the User shall be responsible for maintaining the confidentiality
                      of his/her login details and password and the user shall be responsible for all activities
                      that occur under his/her login details and password. The user agrees that if any of the
                      information provided during registering on this website is or discovered at a later date
                      to be untrue, inaccurate or incomplete or Rittz Accessories has reasonable grounds to suspect
                      that such information is untrue, inaccurate or incomplete, or not in accordance with
                      this Terms of Use, then Rittz Accessories shall have the right to indefinitely suspend or
                      terminate or block access of that user to this website.
                    </p>
                  </div>
                </div>
              )}

              {/* Commercials */}
              {activeSection === 'commercials' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Commercials</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      1. All prices shown at www.rittzaccessories.com are inclusive of any applicable alternate
                      indirect tax (such as, but not limited to, Goods and Services Tax (GST)) in accordance
                      with the applicable legislation. If the GST rate applicable or any other indirect tax rate
                      on the date of the order is changed after the order has been made, the change will be
                      reflected in the price of items without you being notified.
                    </p>
                    <p>
                      2. Rittz Accessories may from time to time at its discretion offer discounts on its products on
                      the website, at its discretion. However, the same shall be for a limited period of time
                      which shall also be the prerogative of Rittz Accessories.
                    </p>
                    <p>
                      3. You may pay with either credit or debit cards, cash on delivery ("COD"), Unified
                      Payments Interface (UPI), Net banking, and Wallets. AXIS banking services manages
                      all of our banking transactions. Rittz Accessories does not store any credit/debit card
                      numbers or net banking or other payment credentials. In case of payment with cards, your payment is handled by Gokwik Solutions Private Limited with secure encryption and under strict banking standards. Your card details are sent directly to the bank and cannot be read or accessed by anyone other than your bank. There is no extra charge for card payments. When paying by credit / debit card starting conditions apply as soon as the card transaction is approved. In the event that no payment has been received after submitting your order, Rittz Accessories may automatically cancel your order.
                    </p>
                    <p>
                      4. All payments on the website shall only be in Indian rupees. In case of a prepaid
                      transaction, after payment for the order has been successfully received by Rittz Accessories,
                      You will be sent a notification by email or SMS at the email address or mobile
                      number provided to Rittz Accessories confirming receipt of payment. There may be limits to
                      the amount of Cash on Delivery payments based on pin codes or the State in India
                      where delivery is to be made. Rittz Accessories reserves the right to withdraw or block or
                      limit Your purchases using Cash on Delivery basis transaction history.
                    </p>
                    <p>
                      5. Once we have received your order we will send an electronic invoice to your e-mail
                      address as a confirmation of your purchase. It is important that you enter the correct e-
                      mail address when placing your order. We recommend saving this email in order to
                      facilitate any contact with customer service you may have in the future. The order
                      confirmation (receipt) also serves as guarantee of proof of purchase.
                    </p>
                    <p>
                      6. Please note that COD may not always be available at all times, on all products and for
                      all pin codes, and the same shall be subject to discretion of Rittz Accessories.
                    </p>
                    <p>
                      7. Please note that at times payments on the website may not be successful due to
                      technical issues or maintenance of the website of the bank or the UPI service provider.
                      Rittz Accessories shall not be held responsible or liable for such eventualities. Further,
                      Rittz Accessories is not liable for any loss or inconvenience caused to You when making
                      payment or for any wrongful debits to Your cards or net banking accounts.
                    </p>
                    <p>
                      8. Users understand and acknowledge that all payments made by the Users using valid
                      credit card/ Debit card/ Cash Card/ and other payment instruments or mechanism
                      including net banking facility will be processed using a payment gateway or
                      appropriate payment system infrastructure and the same is governed by a separate set of terms and conditions agreed between the User and the respective Bank and
                      payment instrument issuing company.
                    </p>
                    <p>
                      9. For all the purchase of an amount equal to or exceeding INR 2,00,000 (Indian Rupees Two lakhs only), You will be required to upload a copy of Your PAN card, within such time as may be prescribed from the date of purchase, failing which, the purchase made by You will be automatically cancelled. The order shall also stand cancelled if
                      there is a discrepancy between Your name in account with Rittz Accessories the name printed
                      on the PAN card.
                    </p>
                  </div>
                </div>
              )}

              {/* Delivery */}
              {activeSection === 'delivery' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Shipping:</h3>
                    <p>
                      Your shipping address and pin code will be verified with the database of Rittz Accessories before
                      You proceed to pay for Your purchase. In the event Your order is not serviceable by our
                      logistics service providers or the area is not covered, we will request You to provide us with
                      an alternate shipping address. You can make purchases on the website from anywhere in the
                      world but at the same time You must ensure the payment and shipping address is within
                      India.
                    </p>
                    <p>
                      When You submit an alternative address for delivery, You are responsible for accepting and
                      collecting the package from such alternative address. Confirmation from the logistics service
                      provider of successful delivery to the alternative shipping address is deemed as acceptance of
                      delivery by You and Rittz Accessories will have no liability in this regard.
                    </p>
                    <p>
                      The delivery of the ordered products will be made by logistics service providers assigned by
                      Rittz Accessories. Deliveries cannot be rescheduled after the order has been placed.
                    </p>
                    <p>
                      The logistics service provider assigned by Rittz Accessories will make a maximum of three [3]
                      attempts to deliver Your order. In case You are not reachable, available or do not accept
                      delivery of products in these attempts Rittz Accessories reserves the right to cancel the order at its
                      discretion. You may be informed of such cancellation by email or SMS at the email address
                      or mobile number provided to Rittz Accessories. The cancelled order is returned to Rittz Accessories. You
                      agree not to hold Rittz Accessories liable for any cancellation.
                    </p>
                    <p>
                      If You wish to request the website to resend the product, You can do so by placing a new
                      order for the product on the terms set out on the website. Your order will be accepted subject
                      to availability of the product.
                    </p>
                    <p>
                      In case there is any dispute regarding the shipment of the product or serviceability for the
                      area not covered by the logistics service providers, Rittz Accessories will not be responsible for the
                      non-delivery of the product.
                    </p>
                    <p>
                      Title and risk of loss for all products ordered by You shall pass on to You upon delivery of the
                      products at the shipping address provided by You.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Multiple Product Orders:</h3>
                    <p>
                      In case You order multiple products in one transaction, Rittz Accessories would endeavour to ship
                      all products together. However, this may not always be possible due to some product characteristics or logistics issues and You may receive the products separately and at different
                      times. If You purchase multiple products in a single transaction, then all the products would
                      be dispatched to a single shipping address given by You. If You wish to ship products to
                      different addresses, then You should book the orders separately based on the shipping
                      addresses.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Missing Items:</h3>
                    <p>
                      In the event, the product package received by You is missing one or more products or
                      accessories or does not include the freebie or the order is partly delivered, You should inform
                      Rittz Accessories through the Customer Care Team within 3 days of delivery date of the
                      package. Missing products claims will not be accepted after 3 days from delivery date.
                    </p>
                    <p>
                      When a package delivered is missing one or more products or accessories, You are requested
                      to return the original package delivered to the seller in accordance with the return and
                      cancellation policy.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Refusal of Delivery:</h3>
                    <p>
                      Before accepting delivery of any product, kindly ensure that the product's packaging is not
                      damaged or tampered. If You observe that the package is damaged or tampered, You are
                      requested to refuse to accept delivery and inform Rittz Accessories within 5 days of delivery date.
                      You are requested to fill the delivery sheet / acknowledgement used by the logistics service
                      providers and note down the condition of the delivered package. Damaged or tampered
                      products claims will not be accepted beyond the returns policy.
                    </p>
                    <p>
                      Orders made in another person's name without his consent, or otherwise will be reported to
                      the authorities. Rittz Accessories holds the right to change prices, correct incorrect prices on all
                      orders as well as final sales. If a price is incorrect, this may compel Rittz Accessories to cancel the
                      purchase and refund any amount paid in the best way. This can be performed at any time.
                    </p>
                  </div>
                </div>
              )}

              {/* Return and Cancellation */}
              {activeSection === 'return-cancellation' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Return and Cancellation</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      For return and cancellation of products purchased on the website, please refer to the
                      respective policy on the website concerning the same.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Promo Codes</h3>
                    <p>
                      Promo Codes should be entered during the checkout process to be valid. Attempting to add a
                      promo code after purchase will not be honored.
                    </p>
                  </div>
                </div>
              )}

              {/* Prohibited Actions */}
              {activeSection === 'prohibited-actions' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Prohibited Actions</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      (a) The user is restrained from allowing any person other than the authorized person(s) to
                      access the website or his account on his behalf.
                    </p>
                    <p>
                      (b) The user undertakes not to resell or assign his/her rights or obligations under these
                      Terms of Use and also agrees not to make any unauthorized commercial use of the
                      products purchased hereunder.
                    </p>
                    <p>
                      (c) The user shall comply with all applicable laws and shall not contravene any
                      applicable laws of India relating to the products as applicable hereunder.
                    </p>
                    <p>
                      (d) The user shall not to print, download, duplicate or otherwise copy, delete, vary or
                      amend or use any data or personal information posted by any other user on this
                      website except such data and information which is posted by the particular user
                      himself.
                    </p>
                    <p>
                      (e) The User shall not infringe any intellectual property rights of Rittz Accessories in this
                      website and/or retain information in any computer system or otherwise with an
                      intention to do so.
                    </p>
                    <p>
                      (f) The User hereby grants to Rittz Accessories a non-exclusive, worldwide, royalty-free,
                      irrevocable, sub-licenseable right to exercise all copyright and publicity rights, in any
                      existing or future media, known or unknown, over the information provided by the
                      user in this website. Such information shall be deemed to be the property of
                      Rittz Accessories and the user shall take all reasonable steps that the same is accurate,
                      complete and is not misleading.
                    </p>
                    <p>
                      (g) The user shall be prohibited to introduce, post or transmit any information or
                      software, which contains a virus, worm or other harmful component into the internet
                      or Rittz Accessories  network system.
                    </p>
                    <p>
                      (h) In the event that the user breaches any of the above mentioned covenants, Rittz Accessories
                      shall have the right to delete any material relating to the violations. Rittz Accessories
                      reserves the unilateral right to suspend or/and deactivate the user's access to the
                      website and/or any other related facility in case of violation of these Terms of Use.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Representations, Warranties and Covenants by the User</h3>
                    <p>
                      a. The user represents and warrants that he/she is legally entitled to enter into and
                      execute a contract and is not disqualified from entering into a contract under the
                      provisions of the Indian Contract Act, 1872.
                    </p>
                    <p>
                      b. There exists no contract, commitments or agreements of any nature which may
                      conflict in interest of the user with this Terms of Use.
                    </p>
                    <p>
                      c. That this 'Terms of Use' document shall be treated parallel to an agreement between
                      Rittz Accessories and the User, under all the applicable laws of India, and by agreeing to
                      proceed with the website, the User has agreed to all the provisions of this Terms of
                      Use in its entirety.
                    </p>
                    <p>
                      d. That the User proceeding with the website shall be treated akin to placing of his
                      signature on an agreement thereby creating legally binding obligations on the User in
                      terms of the provisions of this Terms of Use.
                    </p>
                    <p>
                      e. The User shall comply with all the applicable laws, including but not limited to the
                      Foreign Exchange Management Act, 1999, notifications issued there under the
                      Exchange Control Manual issued by the Reserve Bank of India, Customs Act, 1962,
                      Information Technology Act, 2000, Prevention of Money Laundering Act, 2002,
                      Foreign Contribution Regulation Act, 2010, Income Tax Act, 1961, Export Import
                      Policy of the Government of India and shall include any amendments, notifications
                      and rules thereof under the aforesaid enactments applicable for using the website or
                      buying/ selling any product through the website.
                    </p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              {activeSection === 'personal-information' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      When shopping with Rittz Accessories we will save some of your data to fulfil your purchase.
                      Rittz Accessories treats all personal information confidential. You have the right to request access to
                      your data and if there is anything wrong you can get it changed or removed. Rittz Accessories may
                      also use cookies, for example in order to improve your experience of the website. You can
                      read more about how we use personal data in privacy policy on the website.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Product Information</h3>
                    <p>
                      Rittz Accessories has the right to adjust prices, involve additional cost and change product
                      information such as product pictures and offers without notice. The product images and
                      information texts available reflect the product as much as possible. We reserve the right for
                      any errors that may appear on the page and cannot guarantee that all pictures accurately
                      reflect the true appearance of the watch. The pictures may differ depending on the colour
                      settings in your computer. All pictures should be seen as illustrations only, and do not
                      guarantee correct appearance and characteristics. Rittz Accessories does not warrant that the
                      products displayed on the website and the products delivered to the user shall be exactly
                      similar in features, and there might be minor deviations, not being material.
                    </p>
                  </div>
                </div>
              )}

              {/* Complaints */}
              {activeSection === 'complaints' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Complaints Terms</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      It is important that you as a customer carefully check your goods / products when you receive
                      your shipment in order to verify that the products are not damaged and correct. If your
                      product is damaged in transport, whether the damage is visible or hidden, you must report
                      this as soon as possible to the carrier. If you receive your item and see that it is damaged or
                      does not match the one you ordered or, you shall also contact us within 14 days from
                      receiving the product.
                    </p>
                    <p>
                      Any complaints shall be made to our customer service at the contact details below:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                      <p className="font-medium">Mr. Raghav Kalani</p>
                      <p>Designation: CRM (Customer Relationship Manager)</p>
                      <p>Rittz Accessories</p>
                      <p>98410 49993</p>
                      <p>Email: sales@rittaccessories.com</p>
                    </div>
                    
                    <p>
                      Please supply the order number and the reason for complaint and we will get back to you
                      shortly with instructions on how to return the item. Defective products returned to Rittz Accessories
                      should be treated as if they were faultless. It is in all types of returns extremely important that
                      the product is packaged in such a way that it cannot be damaged during transit. In the case
                      that a returned product has no errors or faults. Rittz Accessories has the right to replace defective
                      goods with goods of the same model. If the item has been discontinued, the customer will
                      receive a full refund.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Additional Information</h3>
                    <p>
                      No transmission of data over the internet is guaranteed to be completely secure. It may be
                      possible for third parties not under the control of Rittz Accessories to intercept or access
                      transmissions or private communications unlawfully. While we strive to protect your Personal
                      Information, neither Rittz Accessories nor any of our service providers can ensure or warrant the
                      security of any information you transmit to us over the internet. Any such transmission is
                      done at your own risk.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Indemnity</h3>
                    <p>
                      The user agrees and undertakes to indemnify and keep indemnified Rittz Accessories and its
                      directors, officers and personnel against all liabilities, costs, expenses (including legal fees),
                      damages and losses suffered or incurred by Rittz Accessories (or its directors, officers and
                      personnel) arising out of:
                    </p>
                    <p>
                      (a) any misrepresentation/ misuse of products or website content/ incorrect reporting of
                      information by the User on the website,
                    </p>
                    <p>
                      (b) any breach by the user of any of the provisions of this Terms of Use or failure to
                      perform any of its obligations under this Terms of Use,
                    </p>
                    <p>
                      (c) any claim made against Rittz Accessories in connection with any of the acts or omissions of
                      the user,
                    </p>
                    <p>
                      (d) gross negligence, wilful misconduct, misbehaviour or criminal acts of the User or any
                      of its representatives.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Limitation of Liability</h3>
                    <p>
                      Rittz Accessories responsibility for errors in connection to delivery is limited to existing conditions
                      of sale. Rittz Accessories bears no direct or indirect responsibility for example, but not limited to,
                      incompatibility, delivery delays, downtime, data loss, additional work or other economic
                      harm.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Force Majeure</h3>
                    <p>
                      Notwithstanding anything contained hereinabove, Rittz Accessories shall not be held liable in the
                      event of non- performance of the contract prevented, hindered or delayed by circumstances
                      beyond our reasonable control including but not limited to governmental acts, regulatory
                      changes, acts of God or forces of nature, landslides, earthquakes, floods, fire, lightening,
                      explosions, major storm (hurricane, typhoons, cyclones, tsunami etc.) or major storm
                      warnings, tidal waves, shipwrecks, communication cable cutting/ theft, major telephone
                      exchange failure and perils of navigations, acts of war (declared or undeclared), insurrection,
                      riots, or public enemies, unavailability of public services, strikes, lockouts, acts or omission
                      of sovereign states or those purporting to represent sovereign states, blockades, embargoes,
                      epidemics, quarantines, public disorders, sabotages, accidents, destruction/ damage/
                      malfunctioning of any equipment, technology failure or circumstances or similar events
                      beyond the reasonable control of Rittz Accessories.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Intellectual Property Rights</h3>
                    <p>
                      All intellectual property rights, such as trademarks and copyright, on the website and in the
                      material published on it are owned by Rittz Accessories. Any use of the site or its content, including
                      copying or storing such content in whole or part, other than for your own personal, non-
                      commercial use, is prohibited without the permission of Rittz Accessories.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Unsolicited Information</h3>
                    <p>
                      (a) The user agrees and accepts that it has not received any unsolicited invitation or
                      advice or invitation from Rittz Accessories or any of its members or authorized
                      representatives to view this website.
                    </p>
                    <p>
                      (b) In the event the user has received an unsolicited invitation from Rittz Accessories, its
                      members or authorized representatives to view this website, please provide details
                      about such invitation, including the reference of the person(s) who has made such
                      invitation, by sending an email to sales@rittaccessories.com.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">User Content</h3>
                    <p>
                      The www.rittzaccessories.com website may include user generated content from for example
                      social media applications. Rittz Accessories does not claim any ownership in rights in such content
                      (images, photos and videos etc.) and take no legal responsibility for it. In case you for suspect
                      a violation of copyright, or any other right, or otherwise is offended by such content, please
                      contact our customer service team as per the contact details set-out below:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                      <p className="font-medium">Mr. Raghav Kalani</p>
                      <p>Designation: CRM (Customer Relationship Manager)</p>
                      <p>Rittz Accessories</p>
                      <p>98410 49993</p>
                      <p>Email: sales@rittaccessories.com</p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Retention of Title</h3>
                    <p>
                      All products remain in Rittz Accessories property until full payment is made and possession is
                      delivered.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Fraud</h3>
                    <p>
                      All attempts at fraud are reported to the authorities and Rittz Accessories reserves the right to cancel the purchase if any suspicion is raised.
                    </p>
                  </div>
                </div>
              )}

              {/* Governance */}
              {activeSection === 'governance' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Governance & Other Terms</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Governing Law and Jurisdiction</h3>
                    <p>
                      These Terms of Use and your use of the www.rittzaccessories.com website are governed by
                      Indian law. All disputes arising from the terms of use and your use of the website, shall be
                      subject to jurisdiction of courts, tribunals or any other applicable forum at Chennai, Tamil Nadu.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Termination</h3>
                    <p>
                      Rittz Accessories reserves the right to terminate your account and/or your use of the
                      www.rittzaccessories.com website at its sole discretion. For example, if Rittz Accessories suspects that you have breached these terms of use or any other website document. Such termination can
                      be made without prior notice.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Maintenance</h3>
                    <p>
                      Rittz Accessories may at its sole discretion and without assigning any reason whatsoever at any time
                      deactivate or/and suspend the User's access to the website without notice to carry out system
                      maintenance/upgrading/testing/repairs/other related work. Without prejudice to any other
                      provisions of this Terms of Use, Rittz Accessories shall not be liable for any
                      loss/damage/costs/expense that the User may suffer or incur in this regard, and no fees/
                      charges payable by the User to Rittz Accessories shall be deducted or refunded or rebated, as a result of such deactivation or/and suspension.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Communication</h3>
                    <p>
                      In using this website, the user does understand and agree that he/she is actually communicating with Rittz Accessories  though electronic records and therefore grants consent to the fact that the user may receive communications via electronic media from Rittz Accessories periodically.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Waiver</h3>
                    <p>
                      Save and except as expressly provided in this Terms of Use, no exercise, or failure to
                      exercise, or delay in exercising any right, power or remedy vested in this Terms of Use shall
                      constitute a waiver by Rittz Accessories of that or any other right, remedy or power.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Amendments</h3>
                    <p>
                      Rittz Accessories may revise these terms of use from time to time. Every time you order a product
                      from us, the general conditions in force at that time will apply to the contract between you
                      and Rittz Accessories. You should therefore periodically visit this page to review the then current
                      terms to which you are bound.
                    </p>
                    
                    <p className="mt-6">
                      This Terms of Use is an electronic record in terms of Information Technology Act, 2000 and
                      rules there under as applicable and the amended provisions pertaining to electronic records in
                      various statutes as amended by the Information Technology Act, 2000. This electronic record
                      is generated by a computer system and does not require any physical or digital signatures.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          By using our website, you acknowledge that you have read, understood, 
                          and agree to be bound by these Terms of Use.
                        </p>
                      </div>
                      <button className="mt-4 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                        I Understand and Agree
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;