import React from 'react';
import useWhatsApp from '../hooks/useWhatsApp';

const WhatsAppNotify = ({ message }) => {
  const { sendMessage } = useWhatsApp();
  return <button onClick={() => sendMessage(message)}>Notify</button>;
};

export default WhatsAppNotify;
