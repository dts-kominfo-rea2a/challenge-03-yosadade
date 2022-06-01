// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (data) => {
  let hasil = [];
  for (let i = 0; i < data.length; i++) {
    hasil.push(`- ${data[i].nama} x ${data[i].kuantitas}`);
  }
  console.log(hasil);
  return hasil;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (item) => {
  // let totalHarga = 0;
  // for (let item of data) {
  //   totalHarga += item.harga * item.kuantitas;
  // }
  // return totalHarga;
  let totalPrice = 0;
  for (let i = 0; i < item.length; i++) {
    totalPrice += parseInt(item[i].harga) * parseInt(item[i].kuantitas);
  }
  return totalPrice;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
