import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { EmployeeManagementComponent } from './employee-management.component';
import { FilterModule} from "./filter/filter.module";
import { DefaultModule} from "./default/default.module";
import { EmployeeManagementRoutes } from './employee-management.routes';
import {FormsModule} from '@angular/forms';
import { EditModule} from "./edit/edit.module";
import { DetailsModule} from "./details/details.module";
import { JsExerciseModule} from "./js-exercise/js-exercise.module";
import {
    ApiService,
    EmployeeService
} from '../shared/services';
import { AddNewModule} from "./add-new/add-new.module";

@NgModule({
    imports: [
        CommonModule,
        FilterModule,
        DefaultModule,
        AddNewModule,
        EditModule,
        DetailsModule,
        RouterModule.forRoot(EmployeeManagementRoutes, {useHash:true}),
        FormsModule,
        JsExerciseModule],
        providers: [ApiService,EmployeeService],
    declarations: [EmployeeManagementComponent],
    exports: [EmployeeManagementComponent]
})

export class EmployeeManagementModule { }
