// Ambil ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

// Contoh data item
// Contoh data item
const items = {
  1: {
    title: "(Brian Khrisna) Seporsi Mie Ayam Sebelum Mati - Rp79.050",
    image: "image/novel1.PNG", // Gambar utama
    images: ["image/novel1_thumb1.PNG", "image/novel1_thumb2.PNG", "image/novel1_thumb3.PNG"], // Array sub-gambar
    text1: "Ale, seorang pria berusia 37 tahun memiliki tinggi badan 189 cm dan berat 138 kg. Badannya bongsor, berkulit hitam, dan memiliki masalah dengan bau badan. Sejak kecil, Ale hidup di lingkungan keluarga yang tidak mendukungnya. Ia tak memiliki teman dekat dan menjadi korban perundungan di sekolahnya...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  2: {
    title: "(Leila S.Chudori) Laut Bercerita - Rp97.750",
    image: "image/novel2.PNG",
    images: ["image/novel2_thumb1.PNG", "image/novel2_thumb2.PNG", "image/novel2_thumb3.PNG"],
    text1: "Buku ini terdiri atas dua bagian. Bagian pertama mengambil sudut pandang seorang mahasiswa aktivis bernama Laut, menceritakan bagaimana Laut dan kawan-kawannya menyusun rencana, berpindah-pindah dalam pelarian, hingga tertangkap oleh pasukan rahasia. Sedangkan bagian kedua dikisahkan oleh Asmara, adik Laut. Bagian kedua mewakili...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  3: {
    title: "(Syahid Muhammad) Manusia dan Badainya - Rp79.200",
    image: "image/novel3.PNG",
    images: ["image/novel3_thumb1.PNG", "image/novel3_thumb2.PNG", "image/novel3_thumb3.PNG"],
    text1: "Karena salah satu pemandangan paling puitis adalah melihat seseorang dan takut-takutnya. Dan penderitaan dan tubuhnya yang gemetar, melangkahkan keimanannya, untuk mengambil sikap, pergi dari hal-hal yang memaku dan mengikat, kehormatannya dan haknya sendiri untuk tumbuh...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  4: {
    title: "(Naela Ali) Floating in Space - Rp68.000",
    image: "image/novel4.PNG",
    images: ["image/novel4_thumb1.PNG", "image/novel4_thumb2.PNG", "image/novel4_thumb3.PNG"],
    text1: "Buku Floating In Space ini merupakan sebuah novel yang di dalamnya berisi beberapa cerita-cerita pendek tentang hubungan/relationship. Buku ini memiliki alur yang ringan sehingga pembaca dapat merasa nyaman saat membaca dan seperti sedang membaca buku harian sendiri. Di buku ini banyak juga memberikan gambaran tentang berbagai 'kondi...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  5: {
    title: "(Eiichiro Oda) One Piece vol 97 - Rp24.000",
    image: "image/komik1.PNG",
    images: ["image/komik1_thumb1.PNG", "image/komik1_thumb2.PNG", "image/komik1_thumb3.PNG"],
    text1: "Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang. Komik seringkali dijadikan sebag...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  6: {
    title: "(Yuto Suzuki) Sakamoto Days vol 15 - Rp33.750",
    image: "image/komik2.PNG",
    images: ["image/komik2_thumb1.PNG", "image/komik2_thumb2.PNG", "image/komik2_thumb3.PNG"],
    text1: "Hyo Si Tangan Besi & Heisuke Si Sniper V.S. Kumanomi Si Pengendali Kekuatan Magnet! Bagaimana perkembangan pertarungan sengit antara tiga orang dengan gaya membunuh yang berbeda di jarak dekat dan jauh? Pada waktu yang sama, di pabrik terbengkalai tempat X bersembunyi, “tokoh itu” berhadapan dengan X mendahului Sakamoto cs yan...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  7: {
    title: "(Tatsuki Fujimoto) Chainsaw Man vol 05 - Rp40.800",
    image: "image/komik3.PNG",
    images: ["image/komik3_thumb1.PNG", "image/komik3_thumb2.PNG", "image/komik3_thumb3.PNG"],
    text1: "Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  8: {
    title: "(Gege Akutami) Jujutsu Kaisen vol 13 -Rp34.000",
    image: "image/komik4.PNG",
    images: ["image/komik4_thumb1.PNG", "image/komik4_thumb2.PNG", "image/komik4_thumb3.PNG"],
    text1: "Dagon berubah menjadi jurei yang menakutkan! Serangan energi kutukan yang tak ada habisnya pun membanjiri Naobito, Maki, dan Nanami. Di sisi lain, sekelompok jusoshi yang mengabdikan diri pada Geto berusaha untuk mendapatkan kembali tubuh Geto dengan membangkitkan sosok yang paling keji...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  9: {
    title: "(Kugane Maruyama) Light Novel: Overlord 1 - The Undead King - Rp114.750",
    image: "image/lnovel1.PNG",
    images: ["image/lnovel1_thumb1.PNG", "image/lnovel1_thumb2.PNG", "image/lnovel1_thumb3.PNG"],
    text1: "YGGDRASIL. Sebuah gim virtual reality yang memungkinkan pemainnya untuk merasakan dunia gim secara nyata, menjadi gim yang sangat populer sejak dirilis pada tahun 2126. Namun sayangnya, 12 tahun kemudian, gim ini har...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  10: {
    title: "(Kugane Maruyama) Light Novel: Overlord 2 - The Dark Warrior - Rp114.750",
    image: "image/lnovel2.PNG",
    images: ["image/lnovel2_thumb1.PNG", "image/lnovel2_thumb2.PNG", "image/lnovel2_thumb3.PNG"],
    text1: "Sejak ditutupnya server gim YGGDRASIL dan masuk ke dunia baru, Momonga yang kini menyandang nama guildnya—Ainz—mencari informasi sebanyak mungkin tentang dunia baru tersebut. Setelah memastikan bahwa tidak ada banyak perbedaan antara dunia baru dengan dunia gim yang ia ketahui, Ainz memutuskan untuk beralih ke rencana berikutnya...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  11: {
    title: "(Okina Baba) Light Novel So I'm a Spider, So What? 1 - Rp97.750",
    image: "image/lnovel3.PNG",
    images: ["image/lnovel3_thumb1.PNG", "image/lnovel3_thumb2.PNG", "image/lnovel3_thumb3.PNG"],
    text1: "“Aku”, yang seharusnya seorang gadis SMA, tiba-tiba terlahir kembali sebagai monster laba-laba di dunia lain!? Meskipun berhasil melarikan diri dari induk laba-laba yang kanibal, aku berakhir di dungeon terburuk yang dihuni kat...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  12: {
    title: "(Okina Baba) Light Novel So I'm a Spider, So What? 2 - Rp97.750",
    image: "image/lnovel4.PNG",
    images: ["image/lnovel4_thumb1.PNG", "image/lnovel4_thumb2.PNG", "image/lnovel4_thumb3.PNG"],
    text1: "“Aku” yang sudah terbiasa melawan monster menggunakan jaring laba-laba, kini menargetkan labirin bawah tanah yang berbahaya dan melangkah ke area baru—Strata Tengah....",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
};

// Tampilkan data jika ada
// Tampilkan data jika ada
if (items[itemId]) {
  const item = items[itemId];
  document.getElementById("item-title").textContent = item.title;

  // Menampilkan gambar utama
  const mainImageDiv = document.getElementById("main-image");
  mainImageDiv.innerHTML = `<img src="${item.image}" alt="${item.title}">`;

  // Menampilkan sub-gambar (thumbnail)
  const img2Div = document.getElementById("img2");
  const img3Div = document.getElementById("img3");
  const img4Div = document.getElementById("img4");

  // Pastikan item.images ada dan memiliki elemen yang cukup
  if (item.images && item.images.length > 0) {
    img2Div.innerHTML = `<img src="${item.images[0]}" alt="${item.title} thumbnail 1">`;
  } else {
    img2Div.innerHTML = ''; // Kosongkan jika tidak ada gambar
    img2Div.style.display = 'none'; // Sembunyikan div jika tidak ada gambar
  }
  if (item.images && item.images.length > 1) {
    img3Div.innerHTML = `<img src="${item.images[1]}" alt="${item.title} thumbnail 2">`;
  } else {
    img3Div.innerHTML = '';
    img3Div.style.display = 'none';
  }
  if (item.images && item.images.length > 2) {
    img4Div.innerHTML = `<img src="${item.images[2]}" alt="${item.title} thumbnail 3">`;
  } else {
    img4Div.innerHTML = '';
    img4Div.style.display = 'none';
  }

  document.getElementById("text1").textContent = item.text1;
  document.getElementById("text2").textContent = item.text2;
} else {
  document.querySelector(".item-detail").innerHTML = "<p>Item tidak ditemukan.</p>";
}

// LOGIKA MODAL KOMENTAR UNTUK ITEM.HTML
// Pastikan bagian ini ada di item.js dan tidak di script.js jika modalnya hanya untuk item.html
// =====================================================================
const modal = document.getElementById("commentModal");
const openModalBtn = document.getElementById("openModalBtn"); // Ini ID tombol yang kita tambahkan
const closeModalBtn = document.getElementById("closeModalBtn");

// Pastikan semua elemen ditemukan sebelum menambahkan event listener
if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible"); // Tambahkan class 'visible' untuk transisi atau display
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("visible"); // Hapus class 'visible'
  });

  // Opsional: Tutup modal saat mengklik di luar konten modal
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.add("hidden");
      modal.classList.remove("visible");
    }
  });
}