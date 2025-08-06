import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import routes
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Mount user routes under /api/v1/users
app.use("/api/v1/users", userRouter);

export { app };
