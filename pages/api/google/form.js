import { createForm } from '../../../lib/googleForms';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formId = await createForm(req.body.title);
    res.json({ formId });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
