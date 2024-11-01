import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import reviewsRouter from "./src/api/reviews.js";

// Configure dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Use reviews router
app.use("/api", reviewsRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("API is ready at http://localhost:${PORT}/api/reviews");
});

// Error handling
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: err.message,
  });
});
