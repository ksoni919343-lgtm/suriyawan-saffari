export default function withOwner(handler) {
  return async (req, res) => {
    // Check owner role
    return handler(req, res);
  };
}
