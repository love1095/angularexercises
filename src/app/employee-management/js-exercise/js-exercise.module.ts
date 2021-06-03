import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { JsExerciseComponent } from './js-exercise.component';
import { JsExerciseRoutes } from './js-exercise.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [JsExerciseComponent],
    exports: [JsExerciseComponent]
})

export class JsExerciseModule { }
