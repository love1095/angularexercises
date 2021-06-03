import { Route } from '@angular/router';

import { EmployeeManagementComponent } from './employee-management.component';
import { FilterRoutes } from './filter/filter.routes';
import { FilterComponent } from "./filter/filter.component";
import { DefaultComponent } from "./default/default.component";
import { AddNewRoutes } from './add-new/add-new.routes';
import { EditRoutes } from './edit/edit.routes';
import { DetailsRoutes } from './details/details.routes';
import { JsExerciseRoutes } from './js-exercise/js-exercise.routes';

export const EmployeeManagementRoutes: Route[] = [
    {
        path: '',
        component: EmployeeManagementComponent
    },
    {
        path: 'management',
        component: EmployeeManagementComponent,
        children: [
            {
                path: ''
            },
            ...FilterRoutes,
            ...AddNewRoutes,
            ...EditRoutes,
            ...DetailsRoutes,
            ...JsExerciseRoutes
        ]
    },
    {
        path: '**', component: DefaultComponent
    }
];