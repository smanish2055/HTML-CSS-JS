if(true){
    var i=9;  // it has scope inside block i.e inside bracket instead if we use var then it work outside block.
    console.log(i);
}
// function birthday(name,date){
const birthday= function(name,date){
    const show=`Happy ${date} birthday ${name} ,the older I get, the more I realize that I am still a little younger than you! Happy birthday.`
    // console.log(show);
    let i=76;
    console.log(i);
    return show;
}
let date='21st'
 const result=birthday("nisha",/*'21st'*/ date);
 console.log(result);
 console.log(i);
  
// ..................................................

 let obj={
     name:'manish',
     date:function(){
         return '21 years';
        // console.log(`age is ${ram}`)
     }
     }
 console.log('age is ' + obj.date())
 console.log(obj.name)
// obj.date("hi")


