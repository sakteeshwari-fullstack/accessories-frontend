'use client';
import { useState, useEffect } from 'react';
import PhoneSignup from '@/components/Auth/PhoneSignup';
import EmailSignup from '@/components/Auth/EmailSignup';
import OTPForm from '@/components/Auth/OTPForm';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState('phone');
  const [contactData, setContactData] = useState(null);
  const [authMethod, setAuthMethod] = useState('phone');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleOTPSent = (data, method = 'phone') => {
    setContactData(data);
    setAuthMethod(method);
    setStep(2);
  };

  const handleResendOTP = () => {
    const type = authMethod === 'phone' ? 'phoneSignup' : 'emailSignup';
    sendOTP(type, contactData);
  };

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  const sendOTP = async (type, data) => {
    console.log(`Sending ${type} OTP to`, data);
    // Replace with actual API logic
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 text-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 scale-105"
        style={{
          backgroundImage: "url('/userloginbg.jpg')", // Replace with your background path
        }}
      />

      {/* Glassmorphic Container */}
      <div
        className={`relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl bg-black/20 backdrop-blur-2xl border border-white/30 transform transition-all duration-500 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md tracking-wide">
          {step === 1 ? 'Create Account' : 'Verify OTP'}
        </h1>

        {step === 1 ? (
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-white/30 justify-center">
              <button
                className={`py-3 px-6 font-medium text-sm transition ${
                  activeTab === 'phone'
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveTab('phone')}
              >
                Phone
              </button>
              <button
                className={`py-3 px-6 font-medium text-sm transition ${
                  activeTab === 'email'
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveTab('email')}
              >
                Email
              </button>
            </div>

            {/* Form Switch */}
            {activeTab === 'phone' ? (
              <PhoneSignup onOTPSent={(data) => handleOTPSent(data, 'phone')} />
            ) : (
              <EmailSignup onOTPSent={(data) => handleOTPSent(data, 'email')} />
            )}
          </div>
        ) : (
          contactData && (
            <div className="space-y-6">
              <p className="text-center text-white">
                OTP sent to{' '}
                <span className="font-semibold text-orange-300">
                  {authMethod === 'phone'
                    ? `${contactData.country_code} ${contactData.phone}`
                    : contactData.email}
                </span>
              </p>

              <OTPForm
                type={authMethod === 'phone' ? 'phoneSignup' : 'emailSignup'}
                contactData={contactData}
                onSuccess={handleSuccess}
                onResend={handleResendOTP}
              />

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-center text-white/80 hover:text-white font-medium transition"
              >
                ← Back to signup options
              </button>
            </div>
          )
        )}

        {/* Login Redirect */}
        <p className="mt-6 text-center text-sm text-white/80">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-orange-300 hover:underline hover:text-orange-400 font-medium transition"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
