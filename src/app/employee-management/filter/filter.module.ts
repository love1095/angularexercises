import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FilterComponent } from './filter.component';
import { FilterRoutes } from './filter.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [FilterComponent],
    exports: [FilterComponent]
})

export class FilterModule { }
