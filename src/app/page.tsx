// src/app/page.tsx
import React from 'react';
import StatusPage from '../../components/StatusPage';
import { getServiceStatus } from '../../lib/data';

// This forces Next.js to execute data loading on each request (SSR/CSR)
// instead of statically caching it. Essential for seeing the delay/loading.
export const dynamic = 'force-dynamic'; 

export default async function HomePage() {
  // This 'await' line is what triggers loading.tsx
  // While waiting (the simulated 5-10 seconds), the user sees loading.tsx.
  const services = await getServiceStatus();

  // Once the data arrives, the final UI is rendered.
  return <StatusPage services={services} isLoading={false} />;
}
