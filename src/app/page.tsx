import React from 'react';
import StatusPage from '../../components/StatusPage';
import { getServiceStatus } from '../../lib/data';

export const dynamic = 'force-dynamic'; 

export default async function HomePage() {
  const services = await getServiceStatus();
  return <StatusPage services={services} isLoading={false} />;
}
