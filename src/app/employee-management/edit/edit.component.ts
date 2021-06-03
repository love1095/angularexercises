
import { Component, OnInit } from '@angular/core';
import {
    ImageFileModel,
    FileReaderEvent,
    EmployeeLevel,
    EmployeeDetails
} from '../../shared/models';

import { EmployeeService } from '../../shared/services';
import { ActivatedRoute, Router } from '@angular/router';


@Component( {
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    employees: EmployeeDetails[] = [];
    isShowAdd = true;
    isFailed = false;
    level = '';
    name = '';
    levelDropdown: EmployeeLevel[] = [
        new EmployeeLevel( 'staff', 'staff' ),
        new EmployeeLevel( 'leader', 'leader' ),
        new EmployeeLevel( 'manager', 'manager' )];
    employee: EmployeeDetails = new EmployeeDetails();
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private employeeFilterService: EmployeeService ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe( params => {
            this.name = params['name'];
            console.log( this.name );
        });

        this.employeeFilterService.getEmployeeBy( this.name, this.level )
            .subscribe(( employees: EmployeeDetails[] ) => {
                console.log( employees.length );
                for ( let employee of employees ) {
                    this.employee = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                }
            },
            error => { this.isFailed = true; }
            )
    }

    onChange( dropdown ) {
        console.log( dropdown );
        this.level = dropdown;
    }
    onEditEmployee( formEdit ) {
        this.employee = new EmployeeDetails( this.name,
            formEdit.value.levelEmployee, formEdit.value.gender, formEdit.value.birthday );
        console.log( formEdit.value );
        this.employeeFilterService.updateEmployeeByName( this.employee )
            .subscribe(( employees: EmployeeDetails[] ) => {
                console.log( employees.length );
                for ( let employee of employees ) {
                    let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                    this.employees.push( employeeTemp );
                }
            },
            error => { this.isFailed = true; }
            )
            this.router.navigate( ['/management/details'] );
    }
}

