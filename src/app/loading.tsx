import React from 'react';
import StatusPage from '../../components/StatusPage';
import { getInitialServiceStatus } from '../../lib/data';

export default function Loading() {
  const initialServices = getInitialServiceStatus();
  return <StatusPage services={initialServices} isLoading={true} />;
}
