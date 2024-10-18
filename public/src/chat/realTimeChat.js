const socket = io();
export const realTimeChat = () => {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatUl = document.getElementById("chat-ul");

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = chatInput.value;
    if (msg.trim() === "") return;
    chatInput.value = "";
    chatUl.innerHTML += `<li class="chat-msg"><span>${msg}</span></li>`;
    socket.emit("chat message", msg);
  });

  socket.on("chat message", (msg) => {
    chatUl.innerHTML += `<li class="chat-msg"><span>${msg}</span></li>`;
    chatUl.scrollTop = chatUl.scrollHeight;
  });
};
