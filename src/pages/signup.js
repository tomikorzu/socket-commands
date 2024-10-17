import {
  changePageSetting,
  redirectPage,
  userAlert,
} from "../utils/mainFunctions";
import { User } from "../utils/variables.js";

import NavbarBtn from "../components/NavbarBtn.js";

const SignUp = () => {
  changePageSetting("Home - Sign-Up", "../../public/vite.svg");

  signupLayout();

  const backDrop = document.querySelector(".back-drop");

  NavbarBtn(
    [
      { item: "Home", url: "/" },
      {
        item: "Sign In",
        url: "/signin",
      },
      {
        item: "Sign Up",
        url: "/signup",
        active: true,
      },
    ],
    backDrop
  );

  const signUpForm = document.getElementById("sign-up-form");
  signUpForm.addEventListener("submit", submitForm);
  const goToSignInBtn = document.getElementById("go-to-sign-in");
  goToSignInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    redirectPage("/signin", "fade-out", 500);
  });
};

async function submitForm(e) {
  e.preventDefault();

  const inputUserName = document.getElementById("user-name");
  const inputFullName = document.getElementById("full-name");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");

  const user = new User(
    inputUserName.value,
    inputEmail.value,
    inputPassword.value,
    inputFullName.value
  );

  if (user.verifyAll()) {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputUserName.value,
          email: inputEmail.value,
          password: inputPassword.value,
          fullname: inputFullName.value,
        }),
      });

      if (response.status === 409) {
        userAlert("alert", "The username or email already exist");
        return;
      }

      redirectPage("/signin", "fade-out", 500);
    } catch (error) {
      console.log("Error during signup:", error.message);
    }
  }
}

function signupLayout() {
  document.getElementById("app").innerHTML = `
    <div class="back-drop fade-in"> 
       <main class="fade-in main-center">
         <form
           class="form-class form"
           id="sign-up-form"
         >
           <h2 class="form-title">Sign Up</h2>
           <div class="inputs-container">
             <input
               type="email"
               class="input-form input"
               id="email"
               placeholder="Email"
             />
             <input
               type="text"
               class="input-form input"
               id="user-name"
               placeholder="User Name"
             />
             <input
               type="text"
               class="input-form input"
               id="full-name"
               placeholder="Full Name"
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
             id="submit-signUp-btn"
             class="accept-btn form-btn btn"
           >
             Submit
           </button>
           <p class="already-account-p">
             Aleready you have an account?
             <button class="already-account-btn" id="go-to-sign-in">
               Sign In
             </button>
           </p>
         </form>
       </main>
     </div>`;
}

export default SignUp;
