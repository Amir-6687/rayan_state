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
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://rayan-state.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, "0.0.0.0", () => {
  console.log("Server running on port 8800");
});
