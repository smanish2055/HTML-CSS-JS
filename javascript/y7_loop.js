// let i;
// for(let i=0;i<5;i++){
//  console.log(i);
// }
// let j=0;
//  do{ 
//      console.log(j);
//      j++;
//    } while(j <10);
   
//    let k=0;
//    while(k<10){
//     //    if(k==5)
//     //    k++;
//     //    break;
//     // continue; 
//     console.log(k);
//        k++;
//    }
 let arr=[4,5,2,5,3,6,7]
//  for(let i=0;i<arr.length;i++){
//      console.log(arr[i]);
//  }
 arr.forEach(function(manish,index,Array){   // element,index,array
     console.log(manish,index,Array);
 });

let mydetail={
    name:'manish',
    class:'cse',
    rollno:1903101,
    cgpa:8.50
    }
console.log(mydetail);
for(let m in mydetail){
    // console.log(`my ${m} of object is ${ob[m]}` )
    console.log(`my ${m} = ${mydetail[m]}` )
}