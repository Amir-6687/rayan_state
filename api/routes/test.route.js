import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const router = express.Router();

// مسیر ساده برای تست آنلاین بودن Backend
router.get("/", (req, res) => {
  res.json({ message: "Backend is online and working!" });
});

// مسیرهای اصلی با JWT
router.get("/should-be-logged-in", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;
