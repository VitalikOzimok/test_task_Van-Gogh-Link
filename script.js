document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
