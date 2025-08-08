'use client';
import { useState } from 'react';
import api from '@/utils/api'; // Import your Axios instance

export default function OTPForm({ 
  type, 
  contactData, 
  onSuccess, 
  onResend 
}) {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Define endpoint mapping
  const endpoints = {
    phoneSignup: '/api/user/auth/register/phone-otp-verify',
    phoneLogin: '/api/user/auth/register/phone-otp-verify',
    emailLogin: '/api/user/auth/verify-email-otp',
    updatePhone: '/api/user/auth/update-phone-verify-otp'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Make API request using your Axios instance
      const response = await api.post(endpoints[type], {
        ...contactData,
        otp
      });
      
      if (response.data.message) {
        setSuccess('Verification successful!');
        // Delay success callback to show message
        setTimeout(() => onSuccess(), 1000);
      } else {
        setError(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      // Handle Axios error structure
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'An error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter OTP
        </label>
        <input
          type="text"
          value={otp}
          onChange={(e) => {
            // Allow only digits and limit to 6 characters
            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
            setOtp(value);
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="123456"
          required
        />
        <p className="text-xs text-gray-500 mt-1 text-center">
          Please check your {contactData.email ? 'email' : 'phone'} for the 6-digit code
        </p>
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
      
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onResend}
          disabled={loading}
          className="text-blue-600 hover:text-blue-800 text-sm disabled:text-gray-400"
        >
          Resend OTP
        </button>
        
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </>
          ) : 'Verify'}
        </button>
      </div>
    </form>
  );
}