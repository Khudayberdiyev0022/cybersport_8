const navbar = document.querySelector("#nav");
const GivenColor = document.querySelector(".navContainer");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navbar.style.backgroundColor = "#000";
    navbar.style.height = "10vh";
    navbar.style.display = "flex";
    navbar.style.justifyContent = "center";
    navbar.style.alignItems = "center";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
