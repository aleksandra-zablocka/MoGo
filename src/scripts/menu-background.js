const heroSection = document.getElementById("hero");

const header = document.querySelector("header");

function handleMouseOver() {
  header.style.opacity = "1";
}

function handleScroll() {
  if (window.scrollY > heroSection.offsetHeight) {
    header.style.backgroundColor = "var(--yellow-dark)";
    header.style.opacity = "0.7";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.opacity = "1";
  }
}

header.addEventListener("mouseover", handleMouseOver);
window.addEventListener("scroll", handleScroll);
