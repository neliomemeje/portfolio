const welcomeSection = document.getElementById("welcome-section");
const h1Welcome = document.querySelector("section h1.greeting");
const menuBtn = document.querySelector(".menu-container");
const ulContainer = document.querySelector(".nav-ul");
const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

menuBtn.addEventListener("click", () => {
  ulContainer.classList.toggle("show-container");
  menuBtn.classList.toggle("change");
});

welcomeSection.addEventListener("mousemove", (e) => {
  const setY = e.offsetY;
  const setX = e.offsetX;

  const spanEl = document.createElement("span");
  spanEl.style.left = setX + "px";
  spanEl.style.top = setY + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  welcomeSection.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

const greetings = " Hello, I am Nelio";
let index = 0;
printEach();
function printEach() {
  index++;
  h1Welcome.innerHTML = `<h1>${greetings.slice(0, index)}</h1>`;
  if (index === greetings.length) {
    index = 0;
  }
  setTimeout(printEach, 300);
}
