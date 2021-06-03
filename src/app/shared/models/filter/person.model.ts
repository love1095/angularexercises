export class Person{

    public id: number;
    public name: string;
    public city: string;
    public salary: number;
    constructor( id?: number, name?: string, city?: string, salary?: number ) {
        this.id = id;
        this.city = city;
        this.salary = salary;
        this.name = name;
    }
}