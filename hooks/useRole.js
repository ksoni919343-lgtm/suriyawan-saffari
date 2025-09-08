import { useState } from 'react';
import { getRole } from '../lib/rbac';

export default function useRole(userId) {
  const [role, setRole] = useState(null);

  const fetchRole = async () => {
    const userRole = await getRole(userId);
    setRole(userRole);
  };

  return { role, fetchRole };
}
