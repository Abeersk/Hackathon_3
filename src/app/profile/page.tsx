// app/profile/page.tsx
'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UserProfile() {
  const { data: session } = useSession();

  // Mock order history data
  const orders = [
    { id: '123', date: '2024-03-01', total: 250, status: 'Delivered' },
    { id: '456', date: '2024-03-15', total: 399, status: 'Processing' },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Please sign in to view your profile</h1>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Welcome, {session.user?.name}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="border-b pb-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Order #{order.id}</p>
                    <p className="text-gray-600">{order.date}</p>
                  </div>
                  <div>
                    <p className="font-medium">£{order.total}</p>
                    <p className="text-sm text-gray-600">{order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}