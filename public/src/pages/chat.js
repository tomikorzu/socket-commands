import { changePageSetting } from "../utils/mainFunctions.js";
import NavbarBtn from "../components/NavbarBtn.js";

const Chat = () => {
  changePageSetting("Chat", "../../public/vite.svg");
  const app = document.getElementById("app");

  chatLayout();

  const chatMain = document.querySelector(".chat-main");

  NavbarBtn(
    [
      { item: "Home", url: "/" },
      { item: "Start", url: "/signin" },
      { item: "Sign Up", url: "/signup" },
      { item: "Chat", url: "/chat", active: true },
    ],
    chatMain
  );
};

const chatLayout = () => {
  app.innerHTML = `<main class="fade-in chat-main">
      <section class="chat-container">
        <header class="header-chat">
          <img src="../assets/img/gm2.jpg" alt="User Image" id="user-img" />
          <h3 id="user-name">User</h3>
          <span id="last-time-connected"></span>
        </header>
        <ul id="chat-ul">Message</ul>
        <form id="chat-form">
          <input type="text" placeholder="Type a message..." id="chat-input" />
          <button type="submit" id="chat-btn">Send</button>
        </form>
      </section>
    </main>`;
};

export default Chat;
