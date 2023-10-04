
function ThucHien() {
    var nloop = document.getElementById("NumLoop").valueAsNumber;

    var str = "";
    var sosao="";

    for(i=0;i<nloop;i++) {
        sosao += "*";
        str += "<li>" + sosao + i + "</li>";
    }

    document.getElementById("KetQua").innerHTML
    = str;
}