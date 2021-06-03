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
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
    value = '';
    levelDefault = '';
    employees: EmployeeDetails[] = [];
    name = '';
    level = '';
    searchKey = '';
    isShow = true;
    isFailed = false;
    isShowAdd = false;
    isEdit = true;
    levelDropdown: EmployeeLevel[] = [
        new EmployeeLevel( '', '' ),
        new EmployeeLevel( 'Staff', 'staff' ),
        new EmployeeLevel( 'Leader', 'leader' ),
        new EmployeeLevel( 'Manager', 'manager' )];
    currentDate = new Date;
    resultDelete = false;
    required = true;
    constructor( private router: Router, private route: ActivatedRoute, private employeeFilterService: EmployeeService ) { }

    ngOnInit() {
        this.employees = [];
        this.route.params.subscribe( params =>
            this.employeeFilterService.getEmployeeBy( this.name, this.level )
                .subscribe(( employees: EmployeeDetails[] ) => {
                    console.log( employees.length );
                    // map return result is array
                    this.employees = employees.map(( employee ) => {
                        return new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                    });
                    // reduce return result is array
                    const result = employees.reduce(( acc, employee, index, array ) => {
                        let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                        if ( employeeTemp.name == 'Thuy' ) {
                            acc.push( employeeTemp );
                        }
                        return acc;
                    }, [] );
                    console.log( result );
                },
                error => { this.isFailed = true; }
                ) )
    }

    onChange( dropdown ) {
        this.level = dropdown;
    }

    onSubmit( formSearch ) {
        console.log( formSearch.value );
        this.employees = [];
        this.level = formSearch.value.level;
        this.name = formSearch.value.name;
        const mapEmployee = [];
        this.employeeFilterService.getEmployeeBy( this.name, this.level )
            .subscribe(( employees: EmployeeDetails[] ) => {
                console.log( employees.length );
                employees.map(( employee ) => {
                    let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                    this.employees.push( employeeTemp );
                });
                const result = employees.reduce(( acc, employee ) => {
                    let employeeTemp = new EmployeeDetails( employee.name, employee.level, employee.gender, employee.birthDate );
                    acc.push( employeeTemp );
                    return acc;
                }, [] );
                console.log( result );
            },
            error => { this.isFailed = true; }
            )

        console.log( this.employees );
    }

    onSearch( event ) {
        this.isShowAdd = true;
        this.router.navigate( ['/management/filter'] );
        console.log( event.value );
    }
    deleteEmployee( employeeUpdate: EmployeeDetails ) {
        console.log( employeeUpdate.name );
        this.employeeFilterService.deleteByEmployeeName( employeeUpdate.name )
            .subscribe(( result: boolean ) => {
                this.resultDelete = result;
            },
            error => { this.isFailed = true; }
            )
        this.router.navigate( ['/management/details'] );
    }
    updateEmployee( employeeUpdate: EmployeeDetails ) {
        console.log( employeeUpdate.name );
        this.router.navigate( ['/management/edit'], { queryParams: { name: employeeUpdate.name } });
    }

}
