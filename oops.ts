class Employee {
    // data-member
    eId:number = 101;
    eName:string = "Raj";
    eSalary:number = 20433;
    eSingle:boolean = true;
    
    //create constructor
    constructor(id: number, name: string, salary: number, isSingle: boolean){
        this.eId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSingle = isSingle;
    }
    //member - function
    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle}`
    }
}
//let empObj = new Employee(102,"raja", 87000, true);
//console.log(empObj.eName);
//console.log(empObj.employeeDetails());

//let empObj1 = new Employee(103, "Sanjay", 90000, true);
//console.log(empObj1.eName);
//console.log(empObj1.employeeDetails());

class Company extends Employee {
    cName: string;
    cAddress: string;

    constructor(id: number, name:string, salary:number, single: boolean, compName:string, compAddr:string){
        super(id, name, salary, single);
        this.cName = compName;
        this.cAddress=compAddr;
    }
    employeeDetails() {
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle} Company Name:${this.cName} Address:${this.cAddress}`;
    }
};

let companyObj = new Company(201, "Arjun", 95000, false, "changepond", "chennai");
console.log(companyObj.employeeDetails());
