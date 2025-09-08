import { geocode } from '../../../lib/maps';

export default async function handler(req, res) {
  const location = await geocode(req.body.address);
  res.json(location);
}
