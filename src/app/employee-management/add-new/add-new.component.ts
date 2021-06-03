
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
    selector: 'app-add-new',
    templateUrl: './add-new.component.html',
    styleUrls: ['./add-new.component.css']
})

export class AddNewComponent implements OnInit {
    employees: EmployeeDetails[] = [];
    isShowAdd = true;
    isFailed = false;
    level = '';
    levelDropdown: EmployeeLevel[] = [
        new EmployeeLevel( 'Staff', 'staff' ),
        new EmployeeLevel( 'Leader', 'leader' ),
        new EmployeeLevel( 'Manager', 'manager' )];
    employee: EmployeeDetails = new EmployeeDetails();
    isShow = false;

    readonly defaultDateFormat: string = 'YYYY-MM-DD';

    datePicker: any;
    constructor( private router: Router, private employeeFilterService: EmployeeService ) { }

    ngOnInit() {

    }

    onChange( dropdown ) {
        console.log( dropdown );
        this.level = dropdown;
    }
    onAddNew() {
        console.log( this.employee );

        this.employeeFilterService.addEmployee( this.employee )
            .subscribe(( employees: EmployeeDetails[] ) => {
                console.log( employees.length );
                for ( let employee of employees ) {
                    let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                    this.employees.push( employeeTemp );
                }
            },
            error => { this.isFailed = true; }
            )

        console.log( this.employees );
        this.router.navigate( ['/management/details'] );
    }

}

