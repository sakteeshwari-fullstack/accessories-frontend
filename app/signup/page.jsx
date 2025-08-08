// 'use client';
// import { useState, useEffect } from 'react';
// import PhoneSignup from '@/components/Auth/PhoneSignup';
// import EmailSignup from '@/components/Auth/EmailSignup';
// import OTPForm from '@/components/Auth/OTPForm';
// import { useRouter } from 'next/navigation';

// export default function SignupPage() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [activeTab, setActiveTab] = useState('phone');
//   const [contactData, setContactData] = useState(null);
//   const [authMethod, setAuthMethod] = useState('phone');
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowContent(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleOTPSent = (data, method = 'phone') => {
//     setContactData(data);
//     setAuthMethod(method);
//     setStep(2);
//   };

//   const handleResendOTP = () => {
//     const type = authMethod === 'phone' ? 'phoneSignup' : 'emailSignup';
//     sendOTP(type, contactData);
//   };

//   const handleSuccess = () => {
//     router.push('/dashboard');
//   };

//   const sendOTP = async (type, data) => {
//     console.log(`Sending ${type} OTP to`, data);
//     // Replace with actual API logic
//   };

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 text-black overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 scale-105"
//         style={{
//           backgroundImage: "url('/userloginbg.jpg')", // Replace with your background path
//         }}
//       />

//       {/* Glassmorphic Container */}
//       <div
//         className={`relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl bg-black/20 backdrop-blur-2xl border border-white/30 transform transition-all duration-500 ${
//           showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//         }`}
//       >
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md tracking-wide">
//           {step === 1 ? 'Create Account' : 'Verify OTP'}
//         </h1>

//         {step === 1 ? (
//           <div className="space-y-6">
//             {/* Tabs */}
//             <div className="flex border-b border-white/30 justify-center">
//               <button
//                 className={`py-3 px-6 font-medium text-sm transition ${
//                   activeTab === 'phone'
//                     ? 'text-orange-400 border-b-2 border-orange-400'
//                     : 'text-white/70 hover:text-white'
//                 }`}
//                 onClick={() => setActiveTab('phone')}
//               >
//                 Phone
//               </button>
//               <button
//                 className={`py-3 px-6 font-medium text-sm transition ${
//                   activeTab === 'email'
//                     ? 'text-orange-400 border-b-2 border-orange-400'
//                     : 'text-white/70 hover:text-white'
//                 }`}
//                 onClick={() => setActiveTab('email')}
//               >
//                 Email
//               </button>
//             </div>

//             {/* Form Switch */}
//             {activeTab === 'phone' ? (
//               <PhoneSignup onOTPSent={(data) => handleOTPSent(data, 'phone')} />
//             ) : (
//               <EmailSignup onOTPSent={(data) => handleOTPSent(data, 'email')} />
//             )}
//           </div>
//         ) : (
//           contactData && (
//             <div className="space-y-6">
//               <p className="text-center text-white">
//                 OTP sent to{' '}
//                 <span className="font-semibold text-orange-300">
//                   {authMethod === 'phone'
//                     ? `${contactData.country_code} ${contactData.phone}`
//                     : contactData.email}
//                 </span>
//               </p>

//               <OTPForm
//                 type={authMethod === 'phone' ? 'phoneSignup' : 'emailSignup'}
//                 contactData={contactData}
//                 onSuccess={handleSuccess}
//                 onResend={handleResendOTP}
//               />

//               <button
//                 type="button"
//                 onClick={() => setStep(1)}
//                 className="w-full text-center text-white/80 hover:text-white font-medium transition"
//               >
//                 ← Back to signup options
//               </button>
//             </div>
//           )
//         )}

//         {/* Login Redirect */}
//         <p className="mt-6 text-center text-sm text-white/80">
//           Already have an account?{' '}
//           <a
//             href="/login"
//             className="text-orange-300 hover:underline hover:text-orange-400 font-medium transition"
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


// app/components/SignupForm.tsx
// app/components/SignupForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {toast} from 'react-toastify'
import api from '@/utils/api'
import { useRouter } from 'next/navigation';

const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+91", name: "India" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
];

export default function SignupPage() {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({
    name: "",
    country_code: "+91",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneOtp: "",
    emailOtp: "",
  });
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const res = await api.post("/api/user/auth/signup",formData)
      await res.data 
      setStep("otp")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };

  const handleVerifyOtp = async() => {
    try {
      const res = await api.post("/api/user/auth/signup-otp-verify",formData)
      await res.data 
      router.push("/login")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {step === "form" ? "Create Your Account" : "Verify Your OTPs"}
        </h2>

        {step === "form" && (
          <form onSubmit={handleSignup} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
                required
              />
            </div>

            {/* Country Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country Code *
              </label>
              <select
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
                required
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="1234567890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#F54A00] text-white py-3 px-4 rounded-lg transition text-lg font-semibold cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}

        {step === "otp" && (
          <div className="space-y-6">
            {/* Phone OTP */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone OTP
              </label>
              <input
                type="text"
                name="phoneOtp"
                value={formData.phoneOtp}
                onChange={handleChange}
                placeholder="Enter phone OTP"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>

            {/* Email OTP */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email OTP
              </label>
              <input
                type="text"
                name="emailOtp"
                value={formData.emailOtp}
                onChange={handleChange}
                placeholder="Enter email OTP"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>

            {/* Verify button */}
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-[#F54A00] text-white py-3 px-4 rounded-lg transition text-lg font-semibold cursor-pointer"
            >
              Verify & Create Account
            </button>
          </div>
        )}

        {/* Login redirect */}
        {step === "form" && (
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F54A00] hover:underline">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}




