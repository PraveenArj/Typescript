console.log("hi everyone");
//string
let myName:string = "Raj"
console.log(myName);
//number
let no1:number = 123;
console.log(no1);
//boolean
let cond1:boolean = true
console.log(cond1);
//array
let course:string[] = ["React","Angular","Java","Python"];
console.log(course);
let breakfast:Array<string> = ["idly","dosa","sambar","chutney"];
console.log(breakfast);
//tuple
let item:[string,number] = ["sam",30];
console.log(item);
//enum
enum days{sun=101,mon,tue,wed,thu,fri,sat};
let data1 = days.mon
console.log(data1);
//union
let information:string | number = 2;
console.log(information);
//any
let data:any = "any"
console.log(data);
