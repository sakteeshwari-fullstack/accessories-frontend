'use client';

import { useEffect, useState } from 'react';
import api from '@/utils/api';

import LogoutButton from '@/components/Auth/LogoutButton';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await api.get('/api/user/auth/current-user', {
          withCredentials: true,
        });
        if (res.data && res.data.user) {
          setUser(res.data.user);
        } else {
          router.push('/login'); // Redirect if user is not found
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        router.push('/login'); // Redirect if error
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null; // Prevents flicker during redirect

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <DashboardPanel user={user} />
        </div>
      </main>
    </div>
  );
}
