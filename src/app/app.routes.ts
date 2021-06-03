import { Routes } from '@angular/router';

import { EmployeeManagementRoutes} from './employee-management/employee-management.routes';
export const routes: Routes = [
    { path: '', redirectTo: 'management', pathMatch: 'full' },
    ...EmployeeManagementRoutes
];