import fs from "fs";
import dotenv from "dotenv";

if (fs.existsSync(".env")) {
  dotenv.config();
}

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";

// Routes
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
const server = http.createServer(app);

// CORS for API + Socket.io
app.use(
  cors({
    origin: ["http://localhost:5173", "https://rayan-state.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// SOCKET.IO
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://rayan-state.vercel.app"],
    credentials: true,
  },
});

let onlineUser = [];

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    onlineUser.push({ userId, socketId: socket.id });
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = onlineUser.find((u) => u.userId === receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    onlineUser = onlineUser.filter((u) => u.socketId !== socket.id);
  });
});

// PORT
const PORT = process.env.PORT || 8800;

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
