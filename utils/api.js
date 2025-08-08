
import axios from "axios";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const NEXT_PUBLIC_API_BASE_URL = "https://backend.queenofhearts.in";

const api = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
});

export default api;






// export const sendOTP = async (type, data) => {
//   const endpoints = {
//     phoneSignup: '/api/user/auth/register/phone-otp',
//     phoneLogin: '/api/user/auth/register/phone-otp', // Same as signup
//     emailLogin: '/api/user/auth/email-otp',
//     updatePhone: '/api/user/auth/update-phone-otp'
//   };

//   const res = await fetch(endpoints[type], {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return await res.json();
// };




