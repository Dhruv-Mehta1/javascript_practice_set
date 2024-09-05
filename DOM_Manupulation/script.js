// task 1 : change color of first element
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";


// task2 : construct 3 child node and change 1st and 3rd node color;
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red";


// change the background color of all list elements.
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "Blue";
});

