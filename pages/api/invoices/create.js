import { generatePDF } from '../../../lib/pdf';

export default async function handler(req, res) {
  const pdf = generatePDF(req.body);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdf);
}
