console.log("This is tutorial 17 on events");
let element=document.getElementById('heading');
document.getElementById("heading").addEventListener("mouseover", function(e) { // click
  let variable;
  console.log("You have clicked the heading");
  let elem2 = document.createElement('h3');
  elem2.id = 'elem2';
  elem2.className = 'elem2';
  let tnode = document.createTextNode('I m mouseover done by Manish haha Never mind..');
  elem2.appendChild(tnode);
  element.replaceWith(elem2);
  

  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
//   variable = e.offsetX;
//   variable = e.offsetY;
//   variable = e.clientX;
//   variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
