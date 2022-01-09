// buat variabel
var namaPengunjung;
// assignt data ke variabel
namaPengunjung = prompt("Dengan Siapa Nihhh ?");

// pengulangan kalo pengunjung kaga ngisi nama
while(namaPengunjung === "" || namaPengunjung === null){
    alert("Jangan Kosong dong hehehe");
    namaPengunjung = prompt("Dengan Siapa ?");
}

// hasilnya kalo pengunjung udh isi
alert("Halo, Selamat datang " + namaPengunjung);
alert('Nama ane Dimas Kurniawan, ane bukan siapa-siapa. "TANPA CINTA, SEMUA IBADAH HANYALAH BEBAN, DAN SEMUA KERJAAN HANYALAH TUGAS SEMATA."');