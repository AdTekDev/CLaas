var soDUNG = 60;
var solan = 0;

function xacDinhDung() {
    solan++;
    if (solan > 5) {
        document.getElementById("KetQua").textContent = "Thua ROI!";
        return;
    }
    var SoDoan = document.getElementById("SoDoan").valueAsNumber;
    var ketqua = "Ket qua doan lan thu " + solan;
    if (SoDoan == soDUNG) {
        ketqua += " DUNG";
    } else if (SoDoan < soDUNG) {
        ketqua += " NHO";
    } else  {
        ketqua += " LON";
    }
    document.getElementById("KetQua").textContent = ketqua;
}