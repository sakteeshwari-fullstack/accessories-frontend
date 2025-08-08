// 'use client';
// import { useState, useEffect } from 'react';
// import PhoneLogin from '../../components/Auth/PhoneLogin';
// import EmailLogin from '../../components/Auth/EmaiLogin';
// import OTPForm from '../../components/Auth/OTPForm';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState('phone');
//   const [step, setStep] = useState(1);
//   const [contactData, setContactData] = useState(null);
//   const [authType, setAuthType] = useState('');
//   const [showContent, setShowContent] = useState(false);
//   const [fadeTab, setFadeTab] = useState('phone');

//   const handleOTPSent = (data, type) => {
//     setContactData(data);
//     setAuthType(type);
//     setStep(2);
//   };

//   const handleResendOTP = () => {
//     const type = authType === 'email' ? 'emailLogin' : 'phoneLogin';
//     sendOTP(type, contactData);
//   };

//   const handleSuccess = () => {
//     router.push('/dashboard');
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => setShowContent(true), 100);
//     return () => clearTimeout(timeout);
//   }, []);

//   const handleTabChange = (tab) => {
//     if (tab !== activeTab) {
//       setFadeTab('');
//       setTimeout(() => {
//         setActiveTab(tab);
//         setFadeTab(tab);
//       }, 200);
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden text-black">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 scale-105"
//         style={{
//           backgroundImage: "url('/userloginbg.jpg')",
//         }}
//       />

//       {/* Login Form */}
//       <div
//         className={`relative z-10 p-8 rounded-2xl shadow-2xl bg-black/20 backdrop-blur-2xl border border-white/30 w-full max-w-md transform transition-all duration-500 ${
//           showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//         }`}
//       >
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md tracking-wide">
//           Welcome Back
//         </h1>

//         {/* Tabs */}
//         {step === 1 && (
//           <>
//             <div className="flex justify-center border-b border-white/30 mb-6">
//               <button
//                 className={`py-2 cursor-pointer px-6 text-sm font-medium backdrop-blur-sm transition duration-300 ${
//                   activeTab === 'phone'
//                     ? 'border-b-2 border-orange-400 text-white'
//                     : 'text-white/70 hover:text-white'
//                 }`}
//                 onClick={() => handleTabChange('phone')}
//               >
//                 Phone
//               </button>
//               <button
//                 className={`py-2 cursor-pointer px-6 text-sm font-medium backdrop-blur-sm transition duration-300 ${
//                   activeTab === 'email'
//                     ? 'border-b-2 border-orange-400 text-white'
//                     : 'text-white/70 hover:text-white'
//                 }`}
//                 onClick={() => handleTabChange('email')}
//               >
//                 Email
//               </button>
//             </div>

//             {/* Animated Section */}
//             <div
//               key={fadeTab}
//               className={`transition-opacity duration-300 ${
//                 fadeTab === '' ? 'opacity-0' : 'opacity-100'
//               }`}
//             >
//               {activeTab === 'phone' ? (
//                 <PhoneLogin onOTPSent={(data) => handleOTPSent(data, 'phone')} />
//               ) : (
//                 <EmailLogin onOTPSent={(data) => handleOTPSent(data, 'email')} />
//               )}
//             </div>
//           </>
//         )}

//         {/* OTP Step */}
//         {step === 2 && contactData && (
//           <>
//             <p className="mb-4 text-sm text-white text-center">
//               OTP sent to{' '}
//               <span className="font-medium text-orange-300">
//                 {authType === 'email'
//                   ? contactData.email
//                   : `${contactData.country_code} ${contactData.phone}`}
//               </span>
//             </p>
//             <OTPForm
//               type={authType === 'email' ? 'emailLogin' : 'phoneLogin'}
//               contactData={contactData}
//               onSuccess={handleSuccess}
//               onResend={handleResendOTP}
//             />
//           </>
//         )}

//         {/* Signup Link */}
//         <p className="mt-6 text-center text-sm text-white/80">
//           Don&apos;t have an account?{' '}
//           <a
//             href="/signup"
//             className="text-orange-300 hover:underline hover:text-orange-400 font-medium transition"
//           >
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from '@/utils/api'
import {toast} from 'react-toastify'

const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+91", name: "India" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
];

export default function LoginPage() {
  const [method, setMethod] = useState("phone");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    phone: "",
    country_code: "+91",
    email: "",
    password: "",
  });

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/api/user/auth/login",{...formData,method},{withCredentials:true})
      const data = await res.data 
      if(data) router.push("/dashboard");  
    } catch (err) {
      toast.error(err?.response?.data?.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        {/* Method Switch */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            onClick={() => setMethod("phone")}
            className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
              method === "phone"
                ? "bg-[#F54A00] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Phone Login
          </button>
          <button
            type="button"
            onClick={() => setMethod("email")}
            className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
              method === "email"
                ? "bg-[#F54A00] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Email Login
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {method === "phone" && (
            <>
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
            </>
          )}

          {method === "email" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F54A00] focus:outline-none"
              />
            </div>
          )}

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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F54A00] text-white py-3 px-4 rounded-lg transition text-lg font-semibold disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#F54A00] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
