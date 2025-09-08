import { login } from '../../../lib/auth';

export default async function handler(req, res) {
  const { data, error } = await login(req.body.email, req.body.password);
  if (error) return res.status(400).json(error);
  res.json(data);
}
