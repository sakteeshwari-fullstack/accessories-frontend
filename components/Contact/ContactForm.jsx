'use client';
import { useState } from 'react';
// import axios from 'axios';
import api from '../../utils/api';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    vatNumber: '',
    consent: false,
  });

  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await api.post('api/contact', form);
      setSuccess(res.data.message);
      setShowThankYouPopup(true); // ✅ Show popup
      setTimeout(() => {
        setShowThankYouPopup(false);
      }, 4000); // auto-close after 4 seconds


      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        vatNumber: '',
        consent: false,
      });
    } catch (err) {
      setSuccess(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[url('/buy-leather.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl  text-gray-800 my-20 mx-auto p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100"

      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">Get in Touch</h2>
          <p className="text-gray-600">We'll respond to your inquiry within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">First Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Last Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.04-.694-.118-1.028A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="Company Name"
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">VAT Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  name="vatNumber"
                  value={form.vatNumber}
                  onChange={handleChange}
                  required
                  placeholder="EU123456789"
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 h-5 w-5 text-orange-500 rounded focus:ring-orange-400"
                required
              />
              <label className="ml-3 block text-gray-700">
                <span className="font-medium">I have read and give my consent to the site's privacy policy.</span>
                <p className="mt-2 text-sm text-gray-600">
                  The https://rittzaccessories.com/ website needs your contact information to respond to your requests...
                  You can unsubscribe by writing to sales@rittzaccessories.com. See our Privacy Policy.
                </p>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 cursor-pointer  px-6 rounded-full text-white font-medium shadow-lg transition ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                }`}
            >
              {isSubmitting ? (
                <div className="flex  items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Submit Request'
              )}
            </motion.button>
          </div>

          {success && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className={`mt-6 p-4 rounded-lg text-center ${success.includes("successfully")
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
                }`}
            >
              {success}
            </motion.div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">Need immediate assistance?</p>
          <p className="text-lg font-medium mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          +91–442247 1672 
          </p>
          <p className="text-lg font-medium mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            sales@ritzzaccessories.com


          </p>
        </div>
      </motion.div>


      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl text-center"
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Thank you!
            </h3>
            <p className="text-gray-700">
              Your request has been submitted. We’ll contact you shortly.
            </p>
            <button
              onClick={() => setShowThankYouPopup(false)}
              className="mt-5 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}