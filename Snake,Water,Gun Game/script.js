let user = prompt("enter the your Choice");
let cpui = Math.floor(Math.random()*3);
let cpu = ["s","w","g"][cpui]

const match = (cpu,user) =>{
    if (cpu === user){
        return "Nothing";
    }
    else if(cpu === "s" && user === "w"){
        return "cpu Winn"
    }
    else if(cpu === "s" && user === "g"){
        return "user Winn"
    }
    else if(cpu === "w" && user === "g"){
        return "cpu Winn"
    }
    else if(cpu === "w" && user === "s"){
        return "user Winn"
    }
    else if(cpu === "g" && user === "w"){
        return "user Winn"
    }
    else if(cpu === "g" && user === "s"){
        return "cpu Winn"
    }
    
}

let result = match(cpu,user);
document.write(`cpu : ${cpu} <br> user : ${user} <br> the winner is ${result.toUpperCase()}`);
