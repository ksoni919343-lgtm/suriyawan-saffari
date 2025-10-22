'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { sendWhatsAppNotification } from '@/lib/twilio';

export default function CustomerPortal() {
  const [products, setProducts] = useState<any[]>([]);

  async function buyNow(productId: string) {
    const { data: session } = await supabase.auth.getSession();
    if (!session) return; // Login first
    await supabase.from('orders').insert({ customer_id: session.user.id, status: 'pending', total_price: 100 }); // Example order
    await sendWhatsAppNotification('+userphone', 'Order placed! Tracking ID: XXX'); // Replace +userphone
  }

  // Yaha products fetch karo Supabase se.

  return (
    <div className="container max-w-7xl mx-auto p-8">
      <div className="ornate-border border-8 border-double border-sandyGold rounded-3xl p-14 text-center text-6xl font-bold bg-chockleti text-white shadow-golden box-shadow-[0_30px_80px_rgba(0,0,0,0.7)] inset-shadow-[0_0_40px_#FFD700] relative overflow-hidden transform-style-preserve-3d transform-rotate-x-10 translate-z-50 transition-transform duration-600 hover:transform-rotate-x-15 hover:translate-z-70 hover:scale-105">Suriyawan Saffari Customer</div>
      <div className="grid-products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-12 perspective-2000">
        {/* Example products - real me fetch karo */}
        <div className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">
          <h2>Product 1</h2>
          <p>₹999 (COD)</p>
          <button onClick={() => buyNow('id1')} className="mt-4 px-6 py-3 bg-sandyGold text-chockleti rounded-xl shadow-lg hover:bg-yellow-600 transition-all">Buy Now</button>
        </div>
        {/* Add more */}
      </div>
    </div>
  );
}
