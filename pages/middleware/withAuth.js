export default function withAuth(handler) {
  return async (req, res) => {
    // Check auth
    return handler(req, res);
  };
}
