function loadscript(src,callback){
    var script = document.createElement("script");
    script.src = src;  
    document.body.appendChild(script);  
    script.onload = function(){
        console.log("loded")
        callback(src);
    }
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello);

function hello(src){
    alert("Hello World" + src );
}