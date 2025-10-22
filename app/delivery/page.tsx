'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { sendWhatsAppNotification } from '@/lib/twilio';

export default function DeliveryPortal() {
  async function markDelivered(parcelId: string) {
    // Update Supabase, photo upload to storage, salary +20 Rs.
    await sendWhatsAppNotification('+phone', 'Delivered!');
  }

  return (
    <div className="container max-w-7xl mx-auto p-8">
      <div className="ornate-border ...">Delivery Boy Portal</div>
      {/* UI: Runsheet button, parcel cards, actions (pending/cancel/delivered), photo, OTP/open box options */}
    </div>
  );
}
