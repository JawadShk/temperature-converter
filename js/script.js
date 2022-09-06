var c = document.getElementById("cel");
var f = document.getElementById("far");

c.addEventListener("input", function(){
    let cel = this.value;
    let far = (cel * 9/5) + 32;
    if(!Number.isInteger(far)){
        far = far.toFixed(4);
    }
    f.value = far;
});
f.addEventListener("input", function(){
    let far = this.value;
    let cel = (far - 32) * 5/9;
    if(!Number.isInteger(cel)){
        cel = cel.toFixed(4);
    }
    c.value = cel;
});
