export type ServiceStatus = 'Online' | 'Degraded' | 'Offline' | 'Loading';

export interface Service {
  name: string;
  status: ServiceStatus;
}