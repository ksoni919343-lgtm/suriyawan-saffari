import { useState } from 'react';

export default function usePortalConfig() {
  const [config, setConfig] = useState({});

  // Fetch config logic

  return { config, setConfig };
}
