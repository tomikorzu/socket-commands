import Home from "./src/pages/home.js";
import SignIn from "./src/pages/signing.js";
import SignUp from "./src/pages/signup.js";
import NotFound from "./src/pages/notFound.js";

const routes = {
  "/": Home,
  "/signin": SignIn,
  "/signup": SignUp,
};

const routerPage = (path) => {
  const page = routes[path] || NotFound;
  page();
};

export const navigate = (path) => {
  history.pushState({}, "", path);
  routerPage(path);
};

document.addEventListener("DOMContentLoaded", () => {
  routerPage(location.pathname);

  document.querySelectorAll("button[data-path]").forEach((button) => {
    button.addEventListener("click", (e) => {
      const path = e.target.getAttribute("data-path");
      navigate(path);
    });
  });
});

window.addEventListener("popstate", () => {
  routerPage(location.pathname);
});
