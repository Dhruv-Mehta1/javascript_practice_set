const inserturl = (src) => {
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script) => {
            resolve("1st script loded");
        }
        script.onerror= () => {reject(0)}
    })
}

let p1 = inserturl("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");

p1.then((value)=>{
    console.log(value);
    return inserturl("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
}).then((value) =>{
    console.log("second is loded")
}).catch((error)=>{
    console.log("sorry somthng Went wrong");
})