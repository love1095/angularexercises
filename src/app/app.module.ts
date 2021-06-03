import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import {RouterModule} from '@angular/router';
import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    EmployeeManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
