import { useState } from 'react';
import { twilio } from '../lib/twilioClient';

export default function useWhatsApp() {
  const [status, setStatus] = useState('idle');

  const sendMessage = async (msg) => {
    setStatus('sending');
    await twilio.messages.create({ body: msg, to: 'whatsapp:+123' });
    setStatus('sent');
  };

  return { status, sendMessage };
}
