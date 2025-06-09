document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".galeria-container img");
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let currentIndex = 0;
  const imagesArr = Array.from(galleryImages);

  if (!imagesArr.length) return;

  function showModal(index) {
    currentIndex = index;
    modalImg.src = imagesArr[currentIndex].src;
    modal.style.display = "flex";
  }

  function hideModal() {
    modal.style.display = "none";
  }

  galleryImages.forEach((img, idx) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => showModal(idx));
  });

  closeBtn.addEventListener("click", hideModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + imagesArr.length) % imagesArr.length;
    modalImg.src = imagesArr[currentIndex].src;
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % imagesArr.length;
    modalImg.src = imagesArr[currentIndex].src;
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape") hideModal();
  });
});

// ...existing code...

// Clanky slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".clanky-slider");
  if (!slider) return;
  const boxy = slider.querySelector(".clanky-boxy");
  const items = boxy.querySelectorAll(".clanok1, .clanok2, .clanok3, .clanok4");
  const prevBtn = slider.querySelector(".clanky-prev");
  const nextBtn = slider.querySelector(".clanky-next");
  let current = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateSlider() {
    const visible = getVisibleCount();
    const itemWidth =
      items[0].offsetWidth + parseFloat(getComputedStyle(boxy).gap || 0);
    boxy.style.transform = `translateX(-${current * itemWidth}px)`;
    prevBtn.style.visibility = current === 0 ? "hidden" : "visible";
    nextBtn.style.visibility =
      current >= items.length - visible ? "hidden" : "visible";
  }
});

// Q2A
document.addEventListener("DOMContentLoaded", function () {
  const q2aItems = document.querySelectorAll(".q2a-item");
  q2aItems.forEach((item) => {
    const btn = item.querySelector(".q2a-question");
    btn.addEventListener("click", () => {
      q2aItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  if (q2aItems[0]) q2aItems[0].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      nav.classList.toggle("open");

      const expanded =
        hamburger.getAttribute("aria-expanded") === "true" || false;
      hamburger.setAttribute("aria-expanded", !expanded);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }
});
