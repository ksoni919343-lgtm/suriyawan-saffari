export function sanitizeInput(input) {
  return input.replace(/<script>/gi, '');
}
