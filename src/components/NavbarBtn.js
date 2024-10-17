import "./styles/navbar-btn.css";
import { redirectPage } from "../utils/mainFunctions";

const NavbarBtn = (items, append) => {
  navbarLayout(append);

  const toggleBtn = document.querySelector(".toggle-btn");

  const toggleClick = () => {
    toggleBtn.classList.toggle("active");
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("clip");
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarMenu.classList.toggle("fade-in-menu");
  };

  toggleBtn.addEventListener("click", toggleClick);

  items.map((item) => {
    const li = document.createElement("li");
    li.className = "navbar-item";
    li.innerHTML = `<div class="button-container">
                <button
                  class="navbar-link"
                >
                  ${item.item}
                </button>
              </div>`;
    document.querySelector(".navbar-menu").appendChild(li);
  });

  items.forEach((item, index) => {
    if (item.active) {
      document
        .querySelectorAll(".navbar-item")
        [index].querySelector(".navbar-link")
        .classList.add("active-item");
    }
  });

  const navbarLinkBtn = document.querySelectorAll(".navbar-link");
  navbarLinkBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      redirectPage(items[index].url, "fade-out", 500);
    });
  });
};

const navbarLayout = (append) => {
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-btn";
  const navbarMenu = document.createElement("nav");
  navbarMenu.className = "navbar";

  toggleBtn.innerHTML = `<span class="line line1"></span>
  <span class="line line2"></span>
  <span class="line line3"></span>`;
  navbarMenu.innerHTML = `
  <ul class="navbar-menu">
  </ul>`;

  append.appendChild(toggleBtn);
  append.appendChild(navbarMenu);
};

export default NavbarBtn;
