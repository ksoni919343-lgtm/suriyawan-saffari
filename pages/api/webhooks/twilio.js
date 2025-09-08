export default async function handler(req, res) {
  // Handle Twilio webhook
  res.json({ received: true });
}
