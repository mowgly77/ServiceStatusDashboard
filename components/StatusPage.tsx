'use client'; 
import React from 'react';
import { Service } from '../types';
import ServiceStatusBadge from './ServiceStatusBadge';

interface Props {
  services: Service[];
  isLoading: boolean;
}

const sortServices = (services: Service[]): Service[] => {
  return [...services].sort((a, b) => a.name.localeCompare(b.name));
};

const StatusPage: React.FC<Props> = ({ services, isLoading }) => {
  const sortedServices = sortServices(services);

  return (
    <div className="status-dashboard">
      <h1>Service Status Dashboard</h1>

      {isLoading && (
        <div className="loading-indicator">
          <p>Fetching real-time updates...</p>
        </div>
      )}

      <div className="services-list">
        {sortedServices.map((service) => (
          <div key={service.name} className="service-item">
            <span className="service-name">{service.name}</span>
            <ServiceStatusBadge status={service.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPage;
