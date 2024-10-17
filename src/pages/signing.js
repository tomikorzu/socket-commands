import { changePageSetting } from "../utils/mainFunctions";
import { redirectPage } from "../utils/mainFunctions";
import NavbarBtn from "../components/NavbarBtn.js";

const Signin = () => {
  const app = document.querySelector("#app");

  changePageSetting("Home - Sign-In", "../../public/vite.svg");

  signinLayout();

  const backDrop = document.querySelector(".back-drop");

  NavbarBtn(
    [
      { item: "Home", url: "/" },
      { item: "Sign In", url: "/signin", active: true },
      { item: "Sign Up", url: "/signup" },
    ],
    backDrop
  );
  const goToSignUpBtn = document.getElementById("go-to-sign-up");
  goToSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    redirectPage("/signup", "fade-out", 500);
  });
  const inputUserNameAndEmail = document.getElementById("email-username");
  const inputPassword = document.getElementById("password");
  const submitSigninBtn = document.getElementById("submit-signin-btn");
  submitSigninBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      formFunctions.verifyUserName(inputUserNameAndEmail.value) &&
      formFunctions.verifyPassword(inputPassword.value)
    ) {
      console.log("All inputs are correct");
    }
  });
};

const signinLayout = () => {
  app.innerHTML = `
    <div class="back-drop fade-in">
          <main class="main-center">
            <form class="form-class form" id="sign-in-form">
            <h2 class="form-title">Sign In</h2>
            <div class="inputs-container">
            <input
            type="text"
            class="input-form input"
            id="email-username"
            placeholder="Email or User Name"
            />
            <input
            type="password"
            class="input-form input"
            id="password"
            placeholder="Password"
            />
            </div>
            <button
                type="submit"
                id="submit-signin-btn"
                class="accept-btn form-btn btn"
                >
                Submit
                </button>
                <p class="already-account-p">
                Aleready you don't have an account?
                <button class="already-account-btn" id="go-to-sign-up">
                Sign up
                </button>
                </p>
                </form>
                </main>
                </div>
                `;
};

export default Signin;
