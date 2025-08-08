'use client';
import { useRouter } from 'next/navigation';
import api from '@/utils/api'

export default function LogoutButton() {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      // Direct API call to logout endpoint
      const response = await api.get('/api/user/auth/logout', {withCredentials:true});
      const data = await response.data
      
      if (data) {
        // Redirect to login page after successful logout
        router.push('/login');
      } else {
        console.error('Logout failed with status:', response.status);
        // Handle specific error cases if needed
      }
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle network errors
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
    >
      Logout
    </button>
  );
}