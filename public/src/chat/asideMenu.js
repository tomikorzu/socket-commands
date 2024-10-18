import { changePageSetting } from "../utils/mainFunctions.js";

const socket = io();

let totalUnreadMsg = 0;

const users = [
  {
    name: "Tomas Korzusehec de calculta",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 0,
  },
  {
    name: "Rodrigez",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 0,
  },
  {
    name: "Luis",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 0,
  },
  {
    name: "Tomas",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 0,
  },
  {
    name: "Korzusehec",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 0,
  },
  {
    name: "de calculta",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 0,
  },
  {
    name: "Tomas Korzusehec de calculta",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12/02/24",
    unreadMsg: 120,
  },
  {
    name: "Rodrigez",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: -2,
  },
  {
    name: "Luis",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 0,
  },
  {
    name: "Tomas",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 0,
  },
  {
    name: "Korzusehec",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 0,
  },
  {
    name: "de calculta",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 0,
  },
];

export const asideMenu = () => {
  const people = document.getElementById("users");
  updateUsers(users, people);
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) =>
    searchPerson(e.target.value.toLowerCase(), people)
  );

  changePageTitle();
};

const createUserLayout = (user) => {
  const li = document.createElement("li");

  let unreadMsgValue = getUnreadMessages(user.unreadMsg);

  li.innerHTML = `
      <img src="${user.img}" alt="User Image" class="person-image" />
      <div class="message-data">
        <h3 class="person-name">${user.name}</h3>
        <span class="last-message">${user.lastMsg}</span>
      </div>
      <div>
        <span class="last-time">${user.lastMsgTime}</span>
        <span class="unread-messages">${unreadMsgValue}</span>
      </div>`;

  const unreadMsg = li.querySelector(".unread-messages");
  if (unreadMsg.textContent === "") {
    unreadMsg.style.display = "none";
  }

  return li;
};

const updateUsers = (userList, peopleElement) => {
  peopleElement.innerHTML = "";
  if (userList.length > 0) {
    userList.forEach((user) => {
      if (user.unreadMsg > 99) user.unreadMsg = "99";
      const li = createUserLayout(user);
      peopleElement.appendChild(li);
    });
  } else {
    peopleElement.innerHTML = `<h2 class="fade-in no-users">No people here!</h2>
    <button id="new-friend">Add a new friend</button>`;
  }
};

const searchPerson = (searchValue, peopleElement) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue)
  );
  updateUsers(filteredUsers, peopleElement);
};

const getUnreadMessages = (unreadMsg) => {
  if (unreadMsg <= 0) return "";
  if (unreadMsg > 99) return "99";
  totalUnreadMsg += unreadMsg;
  return unreadMsg;
};

const changePageTitle = () => {
  if (totalUnreadMsg < 1) {
    changePageSetting("Edulink", "/src/assets/img/huergo.png");
  } else if (totalUnreadMsg >= 99) {
    changePageSetting(`(99+) Edulink`, "/src/assets/img/huergo.png");
  } else {
    changePageSetting(
      `(${totalUnreadMsg}) Edulink`,
      "/src/assets/img/huergo.png"
    );
  }
};
