// Slider de personagens
const container = document.querySelector(".characters-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

if (container && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });
}