export class Employee {

    public id: number;
    public city: string;
    public salary: number;
    constructor( id?: number, city?: string, salary?: number ) {
        this.id = id;
        this.city = city;
        this.salary = salary;
    }
}