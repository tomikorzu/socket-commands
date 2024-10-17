import Home from "./src/pages/home.js";
import SignIn from "./src/pages/signing.js";
import SignUp from "./src/pages/signup.js";
import NotFound from "./src/pages/notFound.js";

const routes = {
  "/": Home,
  "/signin": SignIn,
  "/signup": SignUp,
};

const routing = () => {
  const path = location.pathname;
  const page = routes[path] || NotFound; 
  page();
};

document.addEventListener("DOMContentLoaded", routing);
