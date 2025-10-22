import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export async function sendOTP(phone: string, otp: string) {
  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });
}

export async function sendWhatsAppNotification(phone: string, message: string) {
  await client.messages.create({
    body: message,
    from: 'whatsapp:+14155238886',  // Twilio WhatsApp sandbox
    to: `whatsapp:${phone}`,
  });
}
