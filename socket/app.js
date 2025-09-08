import { Server } from "socket.io";

// const io = new Server(server, {
//   cors: {
//     origin: ["https://rayan-state.vercel.app", "http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

const io = new Server({
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://192.168.178.183:5173",
      "http://192.168.178.183:5174",
      "http://192.168.178.183:5175",
    ],
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log(onlineUser);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver && receiver.socketId) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
    // می‌توانی else هم لاگ بزنی که کاربر آنلاین نیست
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(4000, { host: "0.0.0.0" });
