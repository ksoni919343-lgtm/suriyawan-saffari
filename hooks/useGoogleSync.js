import { useState } from 'react';
import { syncWithGoogle } from '../lib/sheetsDrive';

export default function useGoogleSync() {
  const [syncStatus, setSyncStatus] = useState('idle');

  const sync = async (data) => {
    setSyncStatus('syncing');
    await syncWithGoogle(data);
    setSyncStatus('done');
  };

  return { syncStatus, sync };
}
