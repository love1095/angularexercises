import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component( {
    selector: 'app-employee-management',
    templateUrl: './employee-management.component.html',
    styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
    isShow = true;
    constructor( private router: Router, private route: ActivatedRoute ) { }

    ngOnInit() {
    }

    onSubmit( formSearch ) {
    }
    onAdd() {
        this.router.navigate( ['/management/add'] );
    }

    onSearch() {
        this.router.navigate( ['/management/filter'] );
    }
    onBackHome() {
        this.router.navigate( [''] );
    }
    onExercise() {
        this.router.navigate( ['/management/exercise'] );
    }
}
