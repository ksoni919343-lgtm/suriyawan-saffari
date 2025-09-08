export default function sessionSecurity(handler) {
  return async (req, res) => {
    // Secure session
    return handler(req, res);
  };
}
