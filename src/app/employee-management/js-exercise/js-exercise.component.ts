import { Component, OnInit } from '@angular/core';

import {
    Employee,
    Person
} from '../../shared/models';

@Component( {
    selector: 'app-js-exercise',
    templateUrl: './js-exercise.component.html',
    styleUrls: ['./js-exercise.component.css']
})
export class JsExerciseComponent implements OnInit {

    array: Person[] = [
        new Person( 1, 'Thuy', 'BD', 24 ),
        new Person( 1, 'Hang', 'SG', 23 ),
        new Person( 2, 'Nam', 'HN', 21 ),
        new Person( 3, 'Cuong', 'BD', 22 ),
        new Person( 4, 'Tuans', 'SG', 23 )];
    resultList: Employee[] = [];
    mapTemp: Person[] = [];
    resultMap = new Map();
    constructor() { }

    ngOnInit() {
        // convert array to array use .map
        this.resultList = this.array.map(( item ) => {
            return new Employee( item.id, item.city, item.salary );
        });
        console.log( this.resultList );

        // convert array to map<city, person> use .reduce
        this.resultMap = this.array.reduce(( result, item ) => {
            result.set( item.id, item );
            return result;
        }, new Map() );
        console.log( this.resultMap );

        // convert array to map<city, personArray> use .reduce
        this.resultMap = this.array.reduce(( result, item ) => {
            if ( result.get( item.city ) == null ) {
                this.mapTemp = [];
            } else {
                this.mapTemp = result.get( item.city );
            }
            this.mapTemp.push( item );
            result.set( item.city, this.mapTemp );
            return result;
        }, new Map() );
        console.log( this.resultMap );

        // convert array to map<city, sum> use .reduce
        this.resultMap = this.array.reduce(( result, item ) => {
            if ( result.get( item.city ) == null ) {
                result.set( item.city, item.salary );
            } else {
                result.set( item.city, result.get( item.city ) + item.salary );
            }
            return result;
        }, new Map() );
        console.log( this.resultMap );
    }

}
