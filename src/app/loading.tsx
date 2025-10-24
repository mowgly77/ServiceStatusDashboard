// src/app/loading.tsx
import React from 'react';
import StatusPage from '../../components/StatusPage';
import { getInitialServiceStatus } from '../../lib/data';

// Automatically rendered by Next.js App Router while page.tsx waits for data
export default function Loading() {
  const initialServices = getInitialServiceStatus();

  return (
    // Shows UI with all services in 'Loading' state (Block Loader)
    <StatusPage services={initialServices} isLoading={true} />
  );
}
