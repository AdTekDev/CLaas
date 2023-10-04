
function xacDinhDoTuoi() {
    var hoten = document.getElementById("HoTen").value;
    var tuoi = document.getElementById("Tuoi").valueAsNumber;
    var kq = " do tuoi la ";

    if (tuoi < 30) {
        kq += "thanh nien";
    } else if (tuoi < 60) {
        kq += "trung nien";
    } else {
        kq += "lao nien";
    }
    document.getElementById("KetQua").textContent = hoten + kq;
}