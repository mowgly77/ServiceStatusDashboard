'use client'; 
import React from 'react';
import { ServiceStatus } from '../types';

interface Props {
  status: ServiceStatus;
}

const getBadgeClasses = (status: ServiceStatus): string => {
  const baseClasses = 'status-badge';
  
  switch (status) {
    case 'Online':
      return `${baseClasses} online`;
    case 'Degraded':
      return `${baseClasses} degraded`;
    case 'Offline':
      return `${baseClasses} offline`;
    case 'Loading':
      return `${baseClasses} loading`;
    default:
      return `${baseClasses} loading`;
  }
};

const ServiceStatusBadge: React.FC<Props> = ({ status }) => {
  return (
    <span className={getBadgeClasses(status)}>
      {status}
    </span>
  );
};

export default ServiceStatusBadge;
