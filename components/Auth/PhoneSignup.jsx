'use client';
import { useState } from 'react';
import { countries } from '@/utils/countries';
import api from '@/utils/api'; // Import your Axios instance

export default function PhoneSignup({ onOTPSent }) {
  const [formData, setFormData] = useState({ country_code: '+1', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate phone number format
      if (!/^\d{7,15}$/.test(formData.phone)) {
        throw new Error('Please enter a valid phone number (7-15 digits)');
      }

      // Use Axios to make the API request
      const response = await api.post('/api/user/auth/register/phone-otp', formData);
      
      if (response.data.success) {
        setSuccess('OTP sent successfully!');
        onOTPSent(formData);
      } else {
        setError(response.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      // Handle Axios-specific error structure
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'An error occurred while sending OTP';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <label className="block text-sm font-medium text-white mb-1">
            Country
          </label>
          <select
            value={formData.country_code}
            onChange={(e) => setFormData({...formData, country_code: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.code}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-span-8">
          <label className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="1234567890"
            required
          />
        </div>
      </div>
      
      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">
          {success}
        </div>
      )}
      
      <button 
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending OTP...
          </>
        ) : 'Send OTP'}
      </button>
    </form>
  );
}