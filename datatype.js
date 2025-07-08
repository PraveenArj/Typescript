console.log("hi everyone");
//string
var myName = "Raj";
console.log(myName);
//number
var no1 = 123;
console.log(no1);
//boolean
var cond1 = true;
console.log(cond1);
//array
var course = ["React", "Angular", "Java", "Python"];
console.log(course);
var breakfast = ["idly", "dosa", "sambar", "chutney"];
console.log(breakfast);
//tuple
var item = ["sam", 30];
console.log(item);
//enum
var days;
(function (days) {
    days[days["sun"] = 101] = "sun";
    days[days["mon"] = 102] = "mon";
    days[days["tue"] = 103] = "tue";
    days[days["wed"] = 104] = "wed";
    days[days["thu"] = 105] = "thu";
    days[days["fri"] = 106] = "fri";
    days[days["sat"] = 107] = "sat";
})(days || (days = {}));
;
var data1 = days.mon;
console.log(data1);
//union
var information = 2;
console.log(information);
//any
var data = "any";
console.log(data);
