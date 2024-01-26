let element=document.createElement('li');
//  add class name to the li element
element.className='childul';
element.id='childid';
// element.innerText='<b>hello created element using js</b>';  note:bold tag doesnt work in innerText.
element.innerHTML='<b>hello created element using js</b>';
let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);
   
// replace
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));
// let pr = elem2.hasAttribute('href');
// elem2.removeAttribute('id');
// elem2.setAttribute('title', 'myelem2title');
// console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

// exercise

let ele=document.createElement('h1');
ele.innerHTML='go to codewithharry';
// let h1=document.querySelector();
ul.appendChild(ele)
let el=document.createElement('a');
el.innerHTML='<a href=//www.codewithharry.com>click</a>';
ul.appendChild(el)
console.log(el);


