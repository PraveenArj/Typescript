"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mydata_1 = require("./mydata");
console.log(mydata_1.myFullName);
var productObj = new mydata_1.Product(101, "Laptop", 55000);
console.log(productObj.productDetails());
