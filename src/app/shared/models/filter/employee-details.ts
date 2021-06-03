export class EmployeeDetails{
    public name: string ;
    public level: string;
    public gender: string ;
    public birthDate: Date;
constructor( name?: string, level?:  string, gender?:  string, birthDate?:  Date ) {
    this.name = name;
    this.level = level;
    this.gender = gender;
    this.birthDate = birthDate;
}
}