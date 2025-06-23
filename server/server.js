import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebHooks.js";

connectDB();
const app = express();

app.use(cors()); // enable cross-origin resource sharing

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk webhooks
app.use("/api/clerk", clerkWebHooks())

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
