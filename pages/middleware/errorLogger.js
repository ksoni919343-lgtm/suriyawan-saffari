export default function errorLogger(handler) {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal error' });
    }
  };
}
