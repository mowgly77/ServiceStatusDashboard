import { Service, ServiceStatus } from '../types';
import { REAL_SERVICE_DATA } from '../data/mockData';

export async function getServiceStatus(): Promise<Service[]> {
    const delay = Math.random() * 5000 + 5000;
    await new Promise(resolve => setTimeout(resolve, delay));
    return REAL_SERVICE_DATA;
}

export function getInitialServiceStatus(): Service[] {
    return REAL_SERVICE_DATA.map(service => ({
        ...service,
        status: 'Loading' as ServiceStatus,
    }));
}