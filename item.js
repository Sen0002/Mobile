// Ambil ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

// Contoh data item
// Contoh data item
const items = {
  1: {
    title: "Seporsi Mie Ayam Sebelum Mati",
    image: "image/novel1.PNG", // Gambar utama
    images: ["image/novel1_thumb1.PNG", "image/novel1_thumb2.PNG", "image/novel1_thumb3.PNG"], // Array sub-gambar
    text1: "Sinopsis singkat Seporsi Mie Ayam Sebelum Mati...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  2: {
    title: "Laut Bercerita",
    image: "image/novel2.PNG",
    images: ["image/novel2_thumb1.PNG", "image/novel2_thumb2.PNG", "image/novel2_thumb3.PNG"],
    text1: "Sinopsis singkat Laut Bercerita...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  3: {
    title: "Bumi Manusia",
    image: "image/novel3.PNG",
    images: ["image/novel3_thumb1.PNG", "image/novel3_thumb2.PNG", "image/novel3_thumb3.PNG"],
    text1: "Sinopsis singkat Bumi Manusia...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  4: {
    title: "Laskar Pelangi",
    image: "image/novel4.PNG",
    images: ["image/novel4_thumb1.PNG", "image/novel4_thumb2.PNG", "image/novel4_thumb3.PNG"],
    text1: "Sinopsis singkat Laskar Pelangi...",
    text2: "Detail lebih lanjut tentang buku ini..."
  },
  5: {
    title: "One Piece vol 97",
    image: "image/komik1.PNG",
    images: ["image/komik1_thumb1.PNG", "image/komik1_thumb2.PNG", "image/komik1_thumb3.PNG"],
    text1: "Sinopsis singkat One Piece vol 97...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  6: {
    title: "Sakamoto Days vol 15",
    image: "image/komik2.PNG",
    images: ["image/komik2_thumb1.PNG", "image/komik2_thumb2.PNG", "image/komik2_thumb3.PNG"],
    text1: "Sinopsis singkat Sakamoto Days vol 15...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  7: {
    title: "Chainsaw Man vol 05",
    image: "image/komik3.PNG",
    images: ["image/komik3_thumb1.PNG", "image/komik3_thumb2.PNG", "image/komik3_thumb3.PNG"],
    text1: "Sinopsis singkat Chainsaw Man vol 05...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  8: {
    title: "Jujutsu Kaisen vol 13",
    image: "image/komik4.PNG",
    images: ["image/komik4_thumb1.PNG", "image/komik4_thumb2.PNG", "image/komik4_thumb3.PNG"],
    text1: "Sinopsis singkat Jujutsu Kaisen vol 13...",
    text2: "Detail lebih lanjut tentang komik ini..."
  },
  9: {
    title: "Overlord 1 - The Undead King",
    image: "image/lnovel1.PNG",
    images: ["image/lnovel1_thumb1.PNG", "image/lnovel1_thumb2.PNG", "image/lnovel1_thumb3.PNG"],
    text1: "Sinopsis singkat Overlord 1...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  10: {
    title: "Overlord 2 - The Dark Warrior",
    image: "image/lnovel2.PNG",
    images: ["image/lnovel2_thumb1.PNG", "image/lnovel2_thumb2.PNG", "image/lnovel2_thumb3.PNG"],
    text1: "Sinopsis singkat Overlord 2...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  11: {
    title: "So I'm a Spider, So What? 1",
    image: "image/lnovel3.PNG",
    images: ["image/lnovel3_thumb1.PNG", "image/lnovel3_thumb2.PNG", "image/lnovel3_thumb3.PNG"],
    text1: "Sinopsis singkat So I'm a Spider, So What? 1...",
    text2: "Detail lebih lanjut tentang Light Novel ini..."
  },
  12: {
    title: "So I'm a Spider, So What? 2",
    image: "image/lnovel4.PNG",
    images: ["image/lnovel4_thumb1.PNG", "image/lnovel4_thumb2.PNG", "image/lnovel4_thumb3.PNG"],
    text1: "Sinopsis singkat So I'm a Spider, So What? 2...",
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