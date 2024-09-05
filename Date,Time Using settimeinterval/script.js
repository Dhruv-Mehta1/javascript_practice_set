

let dt = setInterval(() => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mo = a.getMonth();
    let y = a.getFullYear();

    let datetime = "Time : " + h + ":" + m + ":" + s + " Date : " + d + ":" + mo + ":" + y ;
    document.getElementById("dt").innerHTML = datetime;
    
}, 1000);

