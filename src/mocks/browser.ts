import { setupWorker } from 'msw/browser';

import { dashboardHandlers } from './handlers/dashboard.mocks';

export const worker = setupWorker(...dashboardHandlers);
