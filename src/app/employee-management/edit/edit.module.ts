import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [EditComponent],
    exports: [EditComponent]
})

export class EditModule { }
