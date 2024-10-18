import { changePageSetting } from "../utils/mainFunctions.js";
import { asideMenu } from "../chat/asideMenu.js";
import { realTimeChat } from "../chat/realTimeChat.js";

const Chat = () => {
  changePageSetting("Chat", "../../public/vite.svg");
  const app = document.getElementById("app");

  chatLayout();
  asideMenu();
  realTimeChat();
};

const chatLayout = () => {
  app.innerHTML = `<main class="fade-in chat-main">
      <section class="people-container">
        <h1>Chats</h1>
        <input
          type="search"
          name="search"
          id="search-input"
          placeholder="Search a friend..."
        />
        <ul id="users">
        
        </ul>
      </section>
      <section class="chat-container">
        <header class="header-chat">
          <img src="/src/assets/img/gm2.jpg" alt="User Image" id="user-img" />
          <div>
            <h3 id="user-name">Tomas Korzusehec de calculta</h3>
            <span id="last-time-connected">Online</span>
          </div>
        </header>
        <ul id="chat-ul">
          Message
        </ul>
        <form id="chat-form">
          <input type="text" placeholder="Type a message..." id="chat-input" />
          <button type="submit" id="chat-btn">Send</button>
        </form>
      </section>
    </main>`;
};

export default Chat;
