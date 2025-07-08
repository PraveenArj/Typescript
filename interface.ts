interface IPerson{
    personDetails():any;
}
class Organisation implements IPerson{

    pName:string;
    pContact:number;
    pAddress:string;

    constructor(name:string,contact:number,address:string){
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    personDetails() {
        return `Name:${this.pName} Contact:${this.pContact} Address:${this.pAddress}`;
    }

}
let OrganisationObj = new Organisation("varun",12345,"Pune");
console.log(OrganisationObj.personDetails());