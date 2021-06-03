import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DefaultComponent } from './default.component';

@NgModule({
    imports: [
        CommonModule],
    declarations: [DefaultComponent],
    exports: [DefaultComponent]
})

export class DefaultModule { }
