const btn_bao = document.getElementById("btn_bao");
const btn_bua = document.getElementById("btn_bua");
const btn_keo = document.getElementById("btn_keo");
const btn_dau = document.getElementById("btn_dau");

var nguoi = {
    name: 'Nguoi',
    diem: 0,
    thaotac: '',
    anh: document.getElementById("nguoi")
}
var may = {
    name: 'May',
    diem: 0,
    thaotac: "",
    anh: document.getElementById("may")
}
function capnhatdiem() {
    var diemng = document.getElementById("diemnguoi");
    var diemmay = document.getElementById("diemmay");
    
    // Lưu điểm cũ để so sánh
    const oldScoreNguoi = parseInt(diemng.innerHTML) || 0;
    const oldScoreMay = parseInt(diemmay.innerHTML) || 0;
    
    // Cập nhật điểm mới
    diemng.innerHTML = nguoi.diem;
    diemmay.innerHTML = may.diem;
    
    // Thêm animation nếu điểm tăng
    if (nguoi.diem > oldScoreNguoi) {
        diemng.classList.remove("score-animation");
        void diemng.offsetWidth; // Trigger reflow
        diemng.classList.add("score-animation");
    }
    
    if (may.diem > oldScoreMay) {
        diemmay.classList.remove("score-animation");
        void diemmay.offsetWidth; // Trigger reflow
        diemmay.classList.add("score-animation");
    }
}
function tinhdiem(nguoi, may) {
    if (nguoi.thaotac == "bua") {
        if (may.thaotac == "bao")
            may.diem += 1;
        else if (may.thaotac == "keo")
            nguoi.diem += 1;
    }
    else if (nguoi.thaotac == "keo") {
        if (may.thaotac == "bua")
            may.diem += 1;
        else if (may.thaotac == "bao")
            nguoi.diem += 1;
    }
    else {
        if (may.thaotac == "keo")
            may.diem += 1;
        else if (may.thaotac == "bua")
            nguoi.diem += 1;
    }
    capnhatdiem();
}
function luachonngaunhien() {
    let luachons =  ['keo','bua','bao'];
    let luachon = luachons[Math.floor(Math.random() * luachons.length)]
    may.anh.src = "./img/"+luachon+".png";
    may.thaotac = luachon;
}

function doi(imglink) {
        may.anh.src = "./img/chamhoi.png";
        nguoi.anh.src = imglink;
        nguoi.thaotac = imglink.includes("bao") ? "bao" : imglink.includes("bua") ? "bua" : "keo";
}
function dau()
{
    luachonngaunhien();
    tinhdiem(nguoi,may);
}

btn_bao.addEventListener("click", () => doi("./img/bao.png"));
btn_bua.addEventListener("click", () => doi("./img/bua.png"));
btn_keo.addEventListener("click", () => doi("./img/keo.png"));
btn_dau.addEventListener("click",() => dau());
