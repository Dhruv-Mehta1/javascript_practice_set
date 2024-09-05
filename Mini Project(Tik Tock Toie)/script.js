let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let newcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; //turn o  or // turn x
const winPartten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turno === true){
            box.innerText="O";
            turno = false;
        }else{
            box.innerText="X";
            turno = true;
        }
        box.disabled = true;
        chackwinner();
    });
});



function chackwinner() {
    for (let partten of winPartten) {
        //   console.log(partten[0],partten[1],partten[2]);
        let pos1 = boxs[partten[0]].innerText;
        let pos2 = boxs[partten[1]].innerText;
        let pos3 = boxs[partten[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText= `Congraculations, Winner Is ${winner}`;
    newcontainer.classList.remove('hide');
    disablebox();
};

const disablebox = () =>{
    for (let box of boxs){
        box.disabled=true;
    }
};

const enablebox = () =>{
    for (let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame = () => {
        turno=true;
        enablebox();
        newcontainer.classList.add("hide");
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


