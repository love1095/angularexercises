import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export class DetailsModule { }
