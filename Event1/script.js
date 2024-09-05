let btn1 = document.querySelector("#google");
let btn2 = document.querySelector("#fb");
let btn3 = document.getElementsByTagName("button");

btn1.addEventListener("click",()=>{
    window.location="https://www.google.com/";
    window.focus();
})

btn2.addEventListener("click",()=>{
    window.location="https://www.fcebook.com/";
    window.focus();
})

let btn4 = document.querySelector("#btn4");
// function changeImage() {
//     const img = document.getElementById('myImage');
//     if (img.src.includes('on.jpg')) {
//         img.src = 'off.jpeg';
//     } else {
//         img.src = 'on.jpg';
//     }
// }

// OR Using Add eventlistener
   
btn4.addEventListener("click",function(){
    const img = document.getElementById('myImage');
    if (img.src.includes('on.jpg')) {
        img.src = 'off.jpeg';
    } else {
        img.src = 'on.jpg';
    }
});


