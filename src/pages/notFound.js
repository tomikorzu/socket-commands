import { changePageSetting, redirectPage } from "../utils/mainFunctions";

const NotFound = () => {
  changePageSetting("Page Not Found", "../../public/vite.svg");
  document.querySelector("#app").innerHTML = `
  <main class="main-center fade-in page-404">
     <h1 class="h1-error">404</h1>
      <h2 class="h2-error">ooops ! page not found</h2>
      <p class="p-error">
        Sorry the page you are looking for does not exist, Please return to home
      </p>
    <button class="btn error-btn" id="return-home-btn">Return Home</button>
    </main>
    `;

  const returnHomeBtn = document.getElementById("return-home-btn");
  returnHomeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    redirectPage("/", "fade-out", 500);
  });
};

export default NotFound;
