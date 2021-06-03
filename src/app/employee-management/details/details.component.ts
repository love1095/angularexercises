import { Component, OnInit } from '@angular/core';
import {
    EmployeeDetails,
    ImageFileModel,
    FileReaderEvent,
    EmployeeLevel
} from '../../shared/models';
import { EmployeeService } from '../../shared/services';
import { ActivatedRoute, Router } from '@angular/router';
@Component( {
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    employees: EmployeeDetails[] = [];
    name = '';
    level = '';
    isFailed = false;
    constructor( private router: Router, private route: ActivatedRoute, private employeeFilterService: EmployeeService ) { }

    ngOnInit() {
        this.employees = [];
        this.route.params.subscribe( params =>
            this.employeeFilterService.getEmployeeBy( this.name, this.level )
                .subscribe(( employees: EmployeeDetails[] ) => {
                    console.log( employees.length );
                    for ( let employee of employees ) {
                        let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                        this.employees.push( employeeTemp );
                    }
                },
                error => { this.isFailed = true; }
                ) )
    }

}
