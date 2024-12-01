// Manipulasi DOM dengan JavaScript

// 1. Menambahkan event listener untuk tombol "Baca lebih banyak" pada artikel wisata
document.getElementById("moreWisataBtn").addEventListener("click", function () {
  var moreWisata = document.getElementById("moreWisata");

  // Toggle visibility dari paragraf lebih banyak informasi
  if (moreWisata.style.display === "none") {
    moreWisata.style.display = "block"; // Menampilkan paragraf
    this.textContent = "Baca lebih sedikit"; // Mengubah teks tombol
  } else {
    moreWisata.style.display = "none"; // Menyembunyikan paragraf
    this.textContent = "Baca lebih banyak"; // Mengubah teks tombol kembali
  }
});

// 2. Mengubah warna latar belakang saat pengguna scroll ke bagian bawah halaman
window.addEventListener("scroll", function () {
  var footer = document.querySelector("footer");

  // Mengubah warna latar belakang footer saat halaman discroll
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    footer.style.backgroundColor = "#ff6347"; // Warna merah saat scroll ke bawah
  } else {
    footer.style.backgroundColor = "#333"; // Warna default
  }
});

// 3. Mengubah gaya elemen aside saat hover
document.querySelector("aside").addEventListener("mouseenter", function () {
  this.style.backgroundColor = "#b3e5fc"; // Mengubah warna latar belakang saat hover
});

document.querySelector("aside").addEventListener("mouseleave", function () {
  this.style.backgroundColor = "#e0e0e0"; // Mengembalikan warna latar belakang saat tidak hover
});
