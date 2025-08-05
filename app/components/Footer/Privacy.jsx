"use client"
import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'purpose-storage', title: 'Purpose & Storage' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'ad-cookies', title: 'Ads & Cookies' },
    { id: 'security', title: 'Data Security' },
    { id: 'user-content', title: 'User Content' },
    { id: 'contact', title: 'Contact & Grievance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Effective Date: August 5, 2025</p>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <h2 className="font-semibold text-gray-800">Rittz Accessories</h2>
                <p className="text-sm text-gray-600">Trademark of M/S Rittz Accessories</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-gray-700">
              This policy describes how we collect, use, and protect your personal data when you 
              visit rittzaccessories.com or purchase our products. We are committed to protecting 
              your privacy and being transparent about our data practices.
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
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section.id 
                          ? 'bg-blue-600 text-white font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Contacts</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Grievance Officer:</span>
                    Mr. Raghav Kalani
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Phone:</span>
                    98417 22711
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
                      Rittz Accessories, trademarked brand of M/S Rittz accessories, will process your
                      personal data when you are visiting and using the services provided at
                      rittzaccessories.com or purchase products at our platform. At Rittz Accessories, we are committed
                      to protecting your personal data and respecting your privacy. We strive to be
                      transparent in what we do with visitors' and customers' personal data and have
                      therefore adopted this privacy policy.
                    </p>
                    <p>
                      This privacy policy describes how M/S Rittz accessories collects, uses, shares or otherwise processes your personal data.
                      Below, you will find information on what kind of personal data we process, why we
                      do it, what we use it for and how we may share it. Rittz Accessories is the data controller of
                      any processing of your personal data.
                    </p>
                    <p>
                      This policy is to be read in consonance with the terms of use and other documents on
                      this website/platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Application</h3>
                    <p>
                      This policy applies to individuals who access or use the platform for procuring the
                      goods offered for sale through this platform. For the avoidance of doubt, references
                      to "you" across this policy are to an end user that uses the platform. By using the
                      platform, you consent to the collection, storage, usage, and disclosure of your
                      personal data, as described in and collected by us in accordance with this policy.
                    </p>
                  </div>
                </div>
              )}

              {/* Data Collection */}
              {activeSection === 'data-collection' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Collection</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">What Personal Data Do We Process?</h3>
                    <p>
                      We collect personal data when you (i) purchase watches, accessories, belts, watch
                      bands or other goods, (ii) sign up for news, invites and offers, (iii) request support
                      and (iv) are browsing our website. Such personal data will include, but not limited to,
                      your name, e-mail address, telephone, delivery address, payment details, IP address,
                      location, behaviour on the website and other information that you voluntarily provide
                      us (hereinafter collectively referred to as "personal data").
                    </p>
                    <p>
                      You hereby warrant that all personal data that you provide us with is accurate, up-to-
                      date, and true.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Collection Methods</h3>
                    <p>
                      We collect your personal data relating to your identity, demographics when you use
                      our platform, services or otherwise interact with us during the course of our
                      relationship and related information provided from time to time. Some of the
                      sensitive personal data may be collected with your consent, such as your bank
                      account or credit or debit card or other payment instrument information, available on
                      the platform to assist you with your shopping experience etc. all of the above being in
                      accordance with applicable law.
                    </p>
                    <p>
                      We collect information such as your shopping behaviour, preferences, call data records, 
                      device location, voice, your browsing history, and other information that you may provide 
                      to us from time to time. Our primary goal in doing so is to provide you a safe, efficient, 
                      smooth, and customised experience.
                    </p>
                    <p>
                      In general, you can browse the platform without telling us who you are or revealing any
                      personal data about yourself. Once you give us your personal data, you are not
                      anonymous to us. Where possible, we indicate which fields are required and which
                      fields are optional. You always have the option to not provide information, by
                      choosing not to use a particular service or feature on the platform.
                    </p>
                    <p>
                      If you send us personal correspondence, such as emails or letters, or if other
                      users or third parties send us correspondence about your activities or postings on the
                      platform, we may collect such information into a file specific to you.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                      <p className="font-medium text-gray-800">Important Security Note:</p>
                      <p>
                        If you receive an email, a call from a person/association claiming to be from Rittz Accessories
                        seeking any personal data like debit/credit card PIN, net-banking or mobile banking
                        password, we request you to never provide such information. We at Rittz Accessories or our
                        affiliate logistics partner do not at any time connect with you requesting for such
                        information. If you have already revealed such information, report it immediately to
                        an appropriate law enforcement agency.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Purpose and Storage */}
              {activeSection === 'purpose-storage' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose & Storage Period</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                      We will only use your personal data for the purposes, and on the legal grounds, as set
                      out below. We will not use your personal data for any purpose that is incompatible
                      with the below purposes. Further, we will only use your personal data during the
                      period as set out under "Storage period", after which period your personal data
                      will be erased.
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800">Jurisdiction Note</h3>
                      <p>
                        We do not offer any product under this platform outside India and your personal data will 
                        primarily be stored and processed in India. By visiting this platform, providing your 
                        information or availing our product/service, you expressly agree to be bound by the terms 
                        and conditions of this Privacy Policy, the Terms of Use and the applicable service/product 
                        terms and conditions, and agree to be governed by the laws of India.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Purchases
                        </h3>
                        <p className="mt-2">
                          <span className="font-medium">Purpose:</span> To fulfill contractual obligations when you purchase products
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Legal Ground:</span> Contract performance
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Storage Period:</span> During contract term + 1 year warranty
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Direct Marketing
                        </h3>
                        <p className="mt-2">
                          <span className="font-medium">Purpose:</span> To provide news, invites and offers based on your profile
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Legal Ground:</span> Legitimate interest to maintain customer relations
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Storage Period:</span> Until you unsubscribe
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Checkout Reminder
                        </h3>
                        <p className="mt-2">
                          <span className="font-medium">Purpose:</span> Remind you of uncompleted purchases
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Legal Ground:</span> Legitimate interest for both parties
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Storage Period:</span> 1 month after reminder
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          Browsing Data
                        </h3>
                        <p className="mt-2">
                          <span className="font-medium">Purpose:</span> Improve website and for marketing
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Legal Ground:</span> Legitimate interest to improve website
                        </p>
                        <p className="mt-2">
                          <span className="font-medium">Storage Period:</span> Varies - see Cookies section
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800">Fraud Prevention</h3>
                      <p>
                        <span className="font-medium">Purpose:</span> Risk analysis, fraud prevention and risk management
                      </p>
                      <p>
                        <span className="font-medium">Legal Ground:</span> Legitimate interest to prevent fraud
                      </p>
                      <p>
                        <span className="font-medium">Storage Period:</span> 6 months, or 2 years for unsuccessful purchases due to fraud
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800">Analysis of Data</h3>
                      <p>
                        <span className="font-medium">Purpose:</span> Compile aggregated tracking data and statistics
                      </p>
                      <p>
                        <span className="font-medium">Legal Ground:</span> Legitimate interest to create statistics
                      </p>
                      <p>
                        <span className="font-medium">Storage Period:</span> Data is anonymized where possible
                      </p>
                      <p className="mt-2">
                        <span className="font-medium">Opt-out:</span> Contact sales@rittzaccessories.com
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                      <p className="font-medium">Note:</p>
                      <p>
                        The above storage periods do not apply to the extent Rittz Accessories is
                        required to retain your personal data under applicable mandatory law (e.g. accounting laws).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Data Sharing */}
              {activeSection === 'data-sharing' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Sharing</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Who Do We Share Your Personal Data With?</h3>
                    <p>
                      Only the people who need to process personal data for the purposes mentioned above
                      have access to your personal data. We may need to allow our suppliers access to your
                      personal data when they perform services on our behalf, mainly to provide support
                      and maintenance of IT systems, storage services and marketing.
                    </p>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800">Third-Party Service Providers</h3>
                      <p>
                        We work with trusted third-party providers who assist us in various aspects of our 
                        operations, including:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Payment processing services
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Logistics and delivery partners
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          IT infrastructure providers
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Marketing and analytics services
                        </li>
                      </ul>
                      <p className="mt-2">
                        All third-party providers are contractually obligated to maintain the confidentiality 
                        and security of your personal data and are prohibited from using it for any other purpose.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Your Rights */}
              {activeSection === 'your-rights' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                      You are entitled to the following rights under applicable laws regarding your personal data:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Right to Access
                        </h3>
                        <p className="mt-2">
                          You may request access to your personal data. Upon request, we will provide a copy 
                          of your personal data in a commonly used electronic format.
                        </p>
                      </div>
                      
                      <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          Right to Rectification
                        </h3>
                        <p className="mt-2">
                          You are entitled to obtain rectification of inaccurate personal data and to have 
                          incomplete personal data completed.
                        </p>
                      </div>
                      
                      <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Right to Erasure
                        </h3>
                        <p className="mt-2">
                          Under certain circumstances, you may request us to delete your personal data by 
                          contacting sales@rittzaccessories.com.
                        </p>
                      </div>
                      
                      <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Right to Object
                        </h3>
                        <p className="mt-2">
                          You may object to certain processing activities, including processing based on 
                          legitimate interest or for direct marketing purposes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800">Right to Restriction of Processing</h3>
                      <p>
                        You may under certain circumstances request from us to restrict the processing of your personal data.
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800">Right to Data Portability</h3>
                      <p>
                        You are entitled to receive your personal data in a structured, commonly used and 
                        machine-readable format, or have it transmitted directly to another data controller.
                      </p>
                    </div>
                    
                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                      <p className="font-medium">Exercising Your Rights:</p>
                      <p>
                        To exercise any of these rights, please contact us at sales@rittzaccessories.com. 
                        We may need to verify your identity before processing your request.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Ads & Cookies */}
              {activeSection === 'ad-cookies' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Advertisements & Cookies</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Advertisements</h3>
                    <p>
                      We use third-party advertising companies to serve ads when you visit our platform.
                      These companies may use information (not including your name, address, email
                      address, or telephone number) about your visits to this and other websites in order to
                      provide personalized advertisements about goods and services of interest to you.
                    </p>
                    <p>
                      You have an option to opt out from tracking of personalized advertising using the "Opt out
                      of Ads Personalization" settings using your device's settings application. Rittz Accessories will
                      have no access to your GAID once you select this feature.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Cookies</h3>
                    <p>
                      As part of our approach to providing personalized services on our website, we use
                      cookies to store and sometimes track information about you. A cookie is a small data
                      file sent to your browser from a web server and stored on your hard drive that allows
                      easier access the next time the same page is visited.
                    </p>
                    <p>
                      If you do not want your personal information to be stored by cookies, you can configure your
                      browser so that it notifies you whenever a cookie is received. This way you can
                      decide each time to accept cookies or not. However, the use of cookies may be
                      necessary to provide certain features and choosing to reject cookies may reduce the
                      functionality of our website.
                    </p>
                    
                    <div className="mt-6 overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Supplier</th>
                            <th className="border border-gray-300 px-4 py-2">Type of Cookie</th>
                            <th className="border border-gray-300 px-4 py-2">Purpose</th>
                            <th className="border border-gray-300 px-4 py-2">Storage Time</th>
                            <th className="border border-gray-300 px-4 py-2">Sharing</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Rittz Accessories</td>
                            <td className="border border-gray-300 px-4 py-2">Permanent</td>
                            <td className="border border-gray-300 px-4 py-2">Cookie notice storing whether you have accepted privacy and cookie policy</td>
                            <td className="border border-gray-300 px-4 py-2">Permanent</td>
                            <td className="border border-gray-300 px-4 py-2">None</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Rittz Accessories</td>
                            <td className="border border-gray-300 px-4 py-2">First-party</td>
                            <td className="border border-gray-300 px-4 py-2">Session and cart identification</td>
                            <td className="border border-gray-300 px-4 py-2">Session</td>
                            <td className="border border-gray-300 px-4 py-2">None</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Rittz Accessories</td>
                            <td className="border border-gray-300 px-4 py-2">Session</td>
                            <td className="border border-gray-300 px-4 py-2">Session and cart identification</td>
                            <td className="border border-gray-300 px-4 py-2">Temporary session cookie</td>
                            <td className="border border-gray-300 px-4 py-2">None</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Google</td>
                            <td className="border border-gray-300 px-4 py-2">Third-party</td>
                            <td className="border border-gray-300 px-4 py-2">Performance and statistics</td>
                            <td className="border border-gray-300 px-4 py-2">Permanent</td>
                            <td className="border border-gray-300 px-4 py-2">Yes</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Facebook</td>
                            <td className="border border-gray-300 px-4 py-2">Third-party</td>
                            <td className="border border-gray-300 px-4 py-2">Marketing</td>
                            <td className="border border-gray-300 px-4 py-2">Permanent</td>
                            <td className="border border-gray-300 px-4 py-2">Yes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Data Security */}
              {activeSection === 'security' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      We employ appropriate technical and organizational security measures to help protect
                      your personal data against loss and to guard against access by unauthorized persons.
                    </p>
                    
                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-gray-800">Security Measures We Implement</h3>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Secure private connections (HTTPS/SSL encryption)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Comprehensive traceability and logging systems
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Disaster recovery and business continuity planning
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Strict access control and authentication mechanisms
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Regular security audits and vulnerability assessments
                        </li>
                      </ul>
                    </div>
                    
                    <p className="mt-4">
                      We regularly review our security policies and procedures to ensure our systems are secure and
                      protected. While we implement robust security measures, no method of transmission over 
                      the Internet or electronic storage is 100% secure. Therefore, while we strive to protect 
                      your personal data, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>
              )}

              {/* User Content */}
              {activeSection === 'user-content' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">User Content & Consent</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">User Generated Content</h3>
                    <p>
                      We invite you to post content on our platform, including your comments, reviews, or
                      any other information that you would like to be made available on our platform.
                      Please note that such content will be available to all visitors to our platform and may
                      become public.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <p className="font-medium">Important:</p>
                      <p>
                        We cannot prevent such information from being used in a manner that is contrary to this policy, 
                        applicable laws, or your personal privacy, and we disclaim all liability (express or implied) 
                        in this regard. You agree to comply with all applicable laws in relation to the content 
                        uploaded or otherwise shared by you on our platform. You will be solely responsible for
                        any information published by you on our platform that violates applicable laws.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Consent</h3>
                    <p>
                      By visiting our platform or by providing your information, you consent to the
                      collection, use, storage, disclosure and otherwise processing of your information on
                      the platform in accordance with this privacy policy.
                    </p>
                    <p>
                      If you disclose to us any personal data relating to other people, you represent that you 
                      have the authority to do so and permit us to use the information in accordance with 
                      this privacy policy.
                    </p>
                    <p>
                      We take every reasonable step to ensure that your personal data that we process is
                      accurate and, where necessary, kept up to date. You may access, correct, and update your
                      personal data directly through the functionalities provided on the platform. You may
                      delete certain non-mandatory information by logging into our website and visiting
                      profile and settings sections.
                    </p>
                    
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800">Withdrawal of Consent</h3>
                      <p>
                        You have an option to withdraw your consent that you have already provided by
                        contacting sales@rittzaccessories.com. Please mention "Withdrawal of consent for
                        processing personal data" in the subject line of your communication.
                      </p>
                      <p className="mt-2">
                        We will verify such requests before acting on them. Please note that withdrawal of
                        consent will not be retroactive and will be in accordance with the terms of this
                        privacy policy, related terms of use and applicable laws.
                      </p>
                      <p className="mt-2 font-medium">
                        Note: In the event you withdraw consent, we reserve the right to restrict or deny
                        offering any goods under this platform for which we consider such information to be
                        necessary.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact & Grievance */}
              {activeSection === 'contact' && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact & Grievance Information</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Grievance Officer</h3>
                    <p>
                      In accordance with Information Technology Act, 2000, Information Technology
                      (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and other rules made thereunder, 
                      as amended from time to time, the name and contact details of the Grievance Officer are provided below:
                    </p>
                    
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-medium">Mr. Raghav Kalani</p>
                      <p>Designation: CRM (Customer Relationship Manager)</p>
                      <p>Rittz Accessories</p>
                      <p>Phone: 98417 22711</p>
                      <p>Email: sales@rittaccessories.com</p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Contact Information</h3>
                    <p>
                      If you have any questions relating to our handling of your personal data or our use of
                      cookies or if you would like to invoke any of your rights under applicable privacy
                      legislation, please contact us at: sales@rittzaccessories.com
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Changes to This Privacy Policy</h3>
                    <p>
                      If we change how we handle your personal data or how we use cookies, we will
                      promptly update this privacy policy and publish it on this website.
                    </p>
                    <p>
                      To the extent permitted under applicable law, by using our platform after such notice,
                      you consent to updates made to this policy. We encourage you to periodically review
                      this policy for the latest information on our privacy practices.
                    </p>
                    
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">
                            By using our website, you acknowledge that you have read, understood, 
                            and agree to be bound by this Privacy Policy.
                          </p>
                        </div>
                        <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                          I Understand and Agree
                        </button>
                      </div>
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

export default PrivacyPolicy;