
var bienVar = "Biến toàn cục";

function localFunc() {
    bienVar = "Biến trong Function";

    //alert(bienVar);
    document.getElementById("demo").textContent
    = "LOCAL: " + bienVar;
}

function globalFunc() {
    //alert(bienVar);
    document.getElementById("demo").textContent
    = "GLOBAL: " + bienVar;
}


