const socket = io();

const users = [
  {
    name: "Tomas Korzusehec de calculta",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 14,
  },
  {
    name: "Rodrigez",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 1,
  },
  {
    name: "Luis",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 2,
  },
  {
    name: "Tomas",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 30,
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
    unreadMsg: 2,
  },
  {
    name: "Tomas Korzusehec de calculta",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 5000,
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
    unreadMsg: 104,
  },
  {
    name: "Tomas",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 102,
  },
  {
    name: "Korzusehec",
    img: "/src/assets/img/gm2.jpg",
    lastMsg: "Hello",
    lastMsgTime: "12:00",
    unreadMsg: 20,
  },
  {
    name: "de calculta",
    img: "/src/assets/img/me.jpeg",
    lastMsg: "Puto",
    lastMsgTime: "12/02/24",
    unreadMsg: 10,
  },
];

export const chatFunctions = () => {
  const people = document.getElementById("users");
  if (users.length > 0) {
    users.map((user) => {
      const newUser = new Person(
        user.name,
        user.img,
        user.lastMsg,
        user.lastMsgTime,
        user.unreadMsg
      );
      if (user.unreadMsg > 99) {
        newUser.unreadMsg = "99";
      } else if (user.unreadMsg <= 0) {
        newUser.unreadMsg = "";
      }
      const unreadMsg = document.querySelectorAll(".unread-messages");
      unreadMsg.forEach((msg) => {
        if (msg.textContent === "") {
          msg.style.display = "none";
        }
      });
      const li = newUser.createPersonLayout();
      people.appendChild(li);
    });
  } else {
    people.innerHTML = `<h2 class="fade-in no-users">No people here!</h2>
    <button id="new-friend">Add a new friend</button>`;
  }

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => searchPerson(e));
};

class Person {
  constructor(name, img, lastMsg, lastMsgTime, unreadMsg) {
    this.name = name;
    this.img = img;
    this.lastMsg = lastMsg;
    this.lastMsgTime = lastMsgTime;
    this.unreadMsg = unreadMsg;
  }
  createPersonLayout() {
    const li = document.createElement("li");
    li.innerHTML = `
            <img
              src="${this.img}"
              alt="User Image"
              class="person-image"
            />
            <div class="message-data">
              <h3 class="person-name">${this.name}</h3>
              <span class="last-message">${this.lastMsg}</span>
            </div>
            <div>
              <span class="last-time">${this.lastMsgTime}</span>
              <span class="unread-messages">${this.unreadMsg}</span>
            </div>
          `;
    return li;
  }
}

const searchPerson = (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue)
  );
  const people = document.getElementById("users");
  people.innerHTML = "";

  if (filteredUsers.length > 0) {
    filteredUsers.map((user) => {
      const newUser = new Person(
        user.name,
        user.img,
        user.lastMsg,
        user.lastMsgTime,
        user.unreadMsg
      );
      if (user.unreadMsg > 99) {
        newUser.unreadMsg = "99";
      } else if (user.unreadMsg <= 0) {
        newUser.unreadMsg = "";
      }
      const unreadMsg = document.querySelectorAll(".unread-messages");
      unreadMsg.forEach((msg) => {
        if (msg.textContent === "") {
          msg.style.display = "none";
        }
      });
      const li = newUser.createPersonLayout();
      people.appendChild(li);
    });
  } else {
    people.innerHTML = `<h2 class="fade-in no-users">No people found!</h2>`;
  }
};
