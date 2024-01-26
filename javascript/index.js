// 1.ways to print in javascript

// console.log("hello world");
// alert("you are correct website");
// document.write("this is document write")

//2. javascript console API
// console.assert(3==3)
console.log("hello world");
console.warn("this is a warning");
console.error("this is an error");
// console.clear() 
console.assert(3 == (8 - 3));

// 3.javascript variables
// what is variables ? - container to store data values
var number1 = 20;
var number2 = 30;
console.log(number1 + number2);

// 4.data types in js
// number
var num1 = 223;
var num2 = 23.23;
console.log(num1);
// string
var str1 = "this is a string";
var str2 = "this is also a string";
console.log(str2);
// object
var marks = {
    manish: 98,
    pappu: 98,
    harry: 87.77
}
console.log(marks);
// booleans
var a = true;
var b = false;
console.log(a, b);
// var und=undifine;
var und;
console.log(und);
// null
var a = null;
console.log(a);

// At a very high level ,there are twoo types of datatypes in JS
// 1.primitive data types:undifine ,null,number ,string,boolean,symbol
// 2.reference data types:arrays and objects

// array
var arr = [1, 2, "manish", 3, 4, 5]
console.log(arr);
console.log(arr[1]);
console.log(arr[2]);

// 4.operator in js
// arthmetic operator
var c = 100;
var d = 10;
console.log("the value of c+d is", c + d);
console.log("the value of c-d is", c - d);
console.log("the value of c/d is", c / d);
// assignment operator
var e = d;
e += 2;
// e+=c;
console.log(e);
// comparison operators
var x = 10;
var y = 30;
console.log(x == y);
console.log(x < y);
// logical operator
// logical AND
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);
// logical OR
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(true || true);
// logical not
console.log(!false);
console.log(!true);

// 5.function
function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(4, 8);
c2 = avg(8, 6);
console.log(c1, c2);

// 6.conditionals in js
var age = 3;
if (age > 3) {
    console.log("you are eligible");
}
else {
    console.log("you are not eligible");

}
// 7. loop in js

// for loop
var arr = [1, 2, 3, 2, 3, 4]
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// arr.forEach(function(element){
//     console.log(element);
// })

// while loop
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do while loop
// let k=0;
// do{
//     console.log(arr[k]);
//     k++;
// }
// while(k<arr.length)


// break in js
// var arr=[1,2,3,2,3,4]
// for(var i=0;i<arr.length;i++){
//     if(i==3){
//     break;
// }
//     console.log(arr[i]);
// }


// continue
var arr = [1, 2, 3, 2, 5, 4]
for (let i = 0; i < arr.length; i++) {
    if (i == 3) {
        continue;
    }
    console.log(arr[i]);
}

// array methods
let myarr = ["tv", "mobile", "laptop", "camera"];
console.log(myarr)
console.log(myarr.length)
myarr.push("manish")
console.log(myarr)
myarr.pop();
console.log(myarr);
myarr.shift();
console.log(myarr);
myarr.unshift("ram");
console.log(myarr);

console.log(myarr.unshift("shah"));//it give new length
console.log(myarr.toString());//it convert into string
console.log(myarr.sort());//it place in sorted form

// string methods in js
let mylovelystring = "i m manish shah manish";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("manish"))
// console.log(mylovelystring.lastIndexOf("manish"))
console.log(mylovelystring.slice(0, 8))//it shows elements 0 to 8
console.log(mylovelystring.replace("manish", "zyan"))//it replace the content giving first priority to first one if there are multiple same words


//date
let mydate=new Date();
console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes())
// console.log(mydate.getHours())

// DOM(document object model)  manipulation  //it means kind of collection of code 
let elem = document.getElementById('click');
console.log(elem);
let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
// elemclass[1].style.background="green" ;
elemclass[0].classList.add("manish");
elemclass[0].classList.add("text");
// elemclass[0].classList.remove("text");
console.log(elemclass[0].innerHTML);//it show the inner elements
console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('div');//this is for excessing the js tag like div,button,sapn
console.log(tn);

createdElement = document.createElement('p'); //here creating element
createdElement.innerText = "hello there how is going";
tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');  //this replace the created element
// createdElement2.innerText = "things are going right";
// tn[0].replaceChild(createdElement2, createdElement);

// tn[0].removeChild(createdElement2);  //it  remove the created elements 

console.log(document.title);
// console.log(document.URL);
// console.log(document.scripts);
// console.log(document.domain);

// selecting using query
sel = document.querySelector('.container');//whatever u select it select only one 
console.log(sel);
sel = document.querySelectorAll('.container');// whatever u select it select all 
console.log(sel);

//events in js
function clicked() {
    // document.write("hello welcome to my world")
    console.log('the button is clicked');

}

window.onload = function () {// if onload exist then below perform
    console.log('this document is loaded');
}

firstcontainer.addEventListener('click', function () {// when you click on container it execute
    console.log("firstcontainer clicked");
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
})

firstcontainer.addEventListener('mouseover', function () {
    console.log("mouse on  container");// whenever mouse cursor goes inside container it execute
})

firstcontainer.addEventListener('mouseout', function () {
    console.log("mouse out of container");// whenever mouse cursor goes outside container it execute
})

firstcontainer.addEventListener('mousedown', function () {
    console.log("mouse down of container");// whenever mouse button press it execute
})

firstcontainer.addEventListener('mouseup', function () {
    console.log("mouse up of container");// whenever mouse button pressoff it execute
})

let preHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
    console.log("mouse down of container");// whenever mouse button press it execute
})
firstcontainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = preHTML;
    console.log("mouse up of container");// whenever mouse button press it execute
})

// Arrow functions

// function summ(a,b);{
// return a+b;}

//OR(both are same )
summ = (a, b) => {
    return a + b;
}
c = (5, 5);
console.log(c);

// setTimeout and setinterval
hello = () => {
    console.log(" i am loged  in")//this will appear 2sec later in console
    // document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>";
}
setTimeout(hello,2000);
// setInterval(hello, 2000);// it will execute sponteniously after 2sec
        // clr= setInterval(hello,2000);
    //   console.log(clearInterval(clr));
// use clearInterval/clearTimeout to cancel setInterval/setTimeout

// // localstroge in js
// localStorage.setItem('name','manish');
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// JSON(javascript object notation)
let obj={name:"manish",length:1,a:{this:'tha\"t'}}//
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed=JSON.parse(`{"name":"manish","length":1,"a":{"this":"that"}}`)
console.log(typeof parsed)
console.log(parsed);

// ECMA


















