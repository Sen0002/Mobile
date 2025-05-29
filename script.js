function toggleMenu() {
  const menu = document.getElementById("overlayMenu");
  menu.classList.toggle("hidden");
}

function toggleCategories() {
  const list = document.getElementById("categoryList");
  list.classList.toggle("hidden");
}

// Modal Komentar (juga untuk index.html)
const modal = document.getElementById("commentModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");

searchToggle.addEventListener("click", () => {
  if (searchInput.style.display === "block") {
    searchInput.style.display = "none";
  } else {
    searchInput.style.display = "block";
    searchInput.focus();
  }
});

function toggleCategories() {
  const list = document.getElementById("categoryList");
  list.classList.toggle("hidden");
  
  const icon = document.querySelector(".toggle-icon");
  list.classList.contains("hidden") 
    ? icon.textContent = "📂" 
    : icon.textContent = "📁";
}