// let spa1 = document.getElementById("spa1");

// let a = spa1.getAttribute("class")
// console.log(a);

// console.log(spa1.hasAttribute("class")) // if not have attribute then false

// spa1.setAttribute("style", "color : red;")

let div1 = document.createElement('div');
div1.innerHTML= '<h1>New Div</h1>'

document.querySelector("#d1").append(div1); 


//node.prepend(element) //add element at start of node(inside) 
//node.append(element) //add element at end of node (inside)
//node.before(element) //add element at before of node (outside)
//ode.after(element) //add element at after of node (outside)

let a = document.getElementById("d1")

a.className = "red"; // it is change the class name using javascript
