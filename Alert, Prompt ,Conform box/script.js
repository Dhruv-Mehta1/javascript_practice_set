// Write a program to take value of age using promt and chack the aligiblity of driving and show the message using alert box 

let age = prompt("Enter age");
age = parseInt(age);

if (age < 0){
    console.error("please enter valid Input");
    brack;
}

const driveCar = (age) => {
    return age >= 18 ? true:false;
}

if (driveCar(age)){
    alert("yes it can drive");
}else{
    alert("no it do not drive car");
}