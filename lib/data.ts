// lib/data.ts
import { Service, ServiceStatus } from '../types';
import { REAL_SERVICE_DATA } from '../data/mockData';

// Simulates async fetch function with 5-10s delay
export async function getServiceStatus(): Promise<Service[]> {
    const delay = Math.random() * 5000 + 5000; // 5-10 seconds
    await new Promise(resolve => setTimeout(resolve, delay));
    return REAL_SERVICE_DATA;
}

// Returns initial "Loading" state for Block Loader (SSR)
export function getInitialServiceStatus(): Service[] {
    return REAL_SERVICE_DATA.map(service => ({
        ...service,
        status: 'Loading' as ServiceStatus,
    }));
}