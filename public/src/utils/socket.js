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
  updateUsers(users, people);
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) =>
    searchPerson(e.target.value.toLowerCase(), people)
  );
};

const createUserLayout = (user) => {
  const li = document.createElement("li");

  let unreadMsgValue = user.unreadMsg;
  if (unreadMsgValue <= 0) {
    unreadMsgValue = "";
  }

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
