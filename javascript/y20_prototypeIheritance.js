console.log("this is tutorial 20");
//parent class
var mobile =function(){
    this.a=10;
}
mobile.prototype.z=20;

//subclass
var samsung=function(){
    mobile.call(this); //it connect means call parent class object
    this.b=40;
}
samsung.prototype=Object.create(mobile.prototype);// inherite the property of prototype.
s=new samsung();
 document.write(s.a+"<br>");
 document.write(s.b+"<br>");
 document.write(s.z);

//  --------------------------------------------------------------

//  console.log("This is tutorial 30");

// const proto = {
//     slogan: function () {
//         return `This company is the best`;
//     },
//     changeName: function (newName) {
//         this.name = newName
//     }
// }

// // This creates harry object
// let harry = Object.create(proto);
// harry.name = "harry";
// harry.role = "Programmer";
// // harry.changeName("Harry2")
// // console.log(harry)

// // This also creates harry object
// const harry1 = Object.create(proto, {
//     name: { value: "harry", writable: true },
//     role: { value: "Programmer" },
// });
// harry1.changeName("Harry2")
// // console.log(harry1)


// // Employee constructor
// function Employee(name, salary, experience) {
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }

// // Slogan
// Employee.prototype.slogan = function () {
//     return `This company is the best. Regards, ${this.name}`;
// }

// // Create an object from this constructor now
// let harryObj = new Employee("Harry", 345099, 87);
// console.log(harryObj.slogan())

// // Programmer
// function Programmer(name, salary, experience, language) {
//     Employee.call(this, name, salary, experience);
//     this.language = language;
// }

// // Inherit the prototype
// Programmer.prototype = Object.create(Employee.prototype);

// // Manually set the constructor
// Programmer.prototype.constructor = Programmer;

// let rohan = new Programmer("Rohan", 2, 0, "Javascript");
// console.log(rohan);




