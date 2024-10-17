import NavbarBtn from "../components/NavbarBtn.js";
import { changePageSetting } from "../utils/mainFunctions.js";

const Home = () => {
  const app = document.querySelector("#app");

  changePageSetting("Home", "../../public/vite.svg");

  homeLayout();

  const backDrop = document.querySelector(".back-drop");

  NavbarBtn(
    [
      { item: "Home", url: "/", active: true },
      { item: "Start", url: "/signin" },
      { item: "Sign Up", url: "/signup" },
    ],
    backDrop
  );
};

const homeLayout = () => {
  app.innerHTML = `
    <div class="back-drop fade-in">
    <main class="main-center">
    <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <a href="/signin">signin</a>
      </main>
        </div>
      `;
};

export default Home;
