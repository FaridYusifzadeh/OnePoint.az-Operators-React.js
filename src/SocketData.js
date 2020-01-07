import socketIOClient from "socket.io-client";

const LocalStorage = localStorage.getItem("user token");

const socket = socketIOClient.connect("you url", {
  secure: false,
  query: `token=${LocalStorage}`
});

function connect(cb) {
  socket.on("connect", () => {});
  socket.on("message", message => {
    cb(message);
  });
}

export { connect };
