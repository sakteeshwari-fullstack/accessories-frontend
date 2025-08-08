'use client';
import { useState, useEffect } from 'react';
import PhoneLogin from '../../components/Auth/PhoneLogin';
import EmailLogin from '../../components/Auth/EmaiLogin';
import OTPForm from '../../components/Auth/OTPForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('phone');
  const [step, setStep] = useState(1);
  const [contactData, setContactData] = useState(null);
  const [authType, setAuthType] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [fadeTab, setFadeTab] = useState('phone');

  const handleOTPSent = (data, type) => {
    setContactData(data);
    setAuthType(type);
    setStep(2);
  };

  const handleResendOTP = () => {
    const type = authType === 'email' ? 'emailLogin' : 'phoneLogin';
    sendOTP(type, contactData);
  };

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setFadeTab('');
      setTimeout(() => {
        setActiveTab(tab);
        setFadeTab(tab);
      }, 200);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden text-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 scale-105"
        style={{
          backgroundImage: "url('/userloginbg.jpg')",
        }}
      />

      {/* Login Form */}
      <div
        className={`relative z-10 p-8 rounded-2xl shadow-2xl bg-black/20 backdrop-blur-2xl border border-white/30 w-full max-w-md transform transition-all duration-500 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md tracking-wide">
          Welcome Back
        </h1>

        {/* Tabs */}
        {step === 1 && (
          <>
            <div className="flex justify-center border-b border-white/30 mb-6">
              <button
                className={`py-2 cursor-pointer px-6 text-sm font-medium backdrop-blur-sm transition duration-300 ${
                  activeTab === 'phone'
                    ? 'border-b-2 border-orange-400 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => handleTabChange('phone')}
              >
                Phone
              </button>
              <button
                className={`py-2 cursor-pointer px-6 text-sm font-medium backdrop-blur-sm transition duration-300 ${
                  activeTab === 'email'
                    ? 'border-b-2 border-orange-400 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => handleTabChange('email')}
              >
                Email
              </button>
            </div>

            {/* Animated Section */}
            <div
              key={fadeTab}
              className={`transition-opacity duration-300 ${
                fadeTab === '' ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {activeTab === 'phone' ? (
                <PhoneLogin onOTPSent={(data) => handleOTPSent(data, 'phone')} />
              ) : (
                <EmailLogin onOTPSent={(data) => handleOTPSent(data, 'email')} />
              )}
            </div>
          </>
        )}

        {/* OTP Step */}
        {step === 2 && contactData && (
          <>
            <p className="mb-4 text-sm text-white text-center">
              OTP sent to{' '}
              <span className="font-medium text-orange-300">
                {authType === 'email'
                  ? contactData.email
                  : `${contactData.country_code} ${contactData.phone}`}
              </span>
            </p>
            <OTPForm
              type={authType === 'email' ? 'emailLogin' : 'phoneLogin'}
              contactData={contactData}
              onSuccess={handleSuccess}
              onResend={handleResendOTP}
            />
          </>
        )}

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-white/80">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-orange-300 hover:underline hover:text-orange-400 font-medium transition"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
