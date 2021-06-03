import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ApiService } from '../common';
import { EmployeeDetails } from '../../models';

@Injectable()
export class EmployeeService {
    constructor( private http: Http, private apiService: ApiService ) {
    }
    getEmployeeBy( name: string, level: string ): Observable<EmployeeDetails[]> {
        return this.apiService
            .getData( `http://localhost:8338/exercise/management/employee/details?name=${name}&level=${level}` );
    }

    addEmployee( data: any ): Observable<any> {
        return this.apiService
            .postDataAndExtractResultWithoutJwt( 'http://localhost:8338/exercise/management/employee/add', data );
    }
    deleteByEmployeeName( name: string ): Observable<any> {
        return this.apiService
            .deleteData( `http://localhost:8338/exercise/management/employee/delete?name=${name}` );
    }
    updateEmployeeByName(  data: any ): Observable<any> {
        return this.apiService
        .postDataAndExtractResultWithoutJwt( 'http://localhost:8338/exercise/management/employee/update', data );

    }
}