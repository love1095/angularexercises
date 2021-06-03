import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AddNewComponent } from './add-new.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [AddNewComponent],
    exports: [AddNewComponent]
})

export class AddNewModule { }
