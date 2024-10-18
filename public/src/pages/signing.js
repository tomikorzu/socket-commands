import { changePageSetting } from "../utils/mainFunctions.js";
import NavbarBtn from "../components/NavbarBtn.js";
import { navigate } from "../../App.js";
import { User } from "../utils/variables.js";
import { userAlert } from "../utils/mainFunctions.js";

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
      { item: "Chat", url: "/chat" },
    ],
    backDrop
  );

  const goToSignUpBtn = document.getElementById("go-to-sign-up");
  goToSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("/signup");
  });

  const inputUserNameAndEmail = document.getElementById("email-username");
  const inputPassword = document.getElementById("password");
  const submitSigninBtn = document.getElementById("submit-signin-btn");

  submitSigninBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = new User(
      inputUserNameAndEmail.value,
      inputUserNameAndEmail.value,
      inputPassword.value,
      ""
    );

    if (
      user.verifyUserName(inputUserNameAndEmail.value) &&
      user.verifyPassword(inputPassword.value)
    ) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: inputUserNameAndEmail.value,
            password: inputPassword.value,
          }),
        });

        if (response.ok) {
          navigate("/chat");
        } else {
          const errorData = await response.json();
          userAlert(
            "Alert",
            errorData.message || "Invalid username or password"
          );
        }
      } catch (error) {
        console.log("Error during sign-in:", error.message);
      }
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
