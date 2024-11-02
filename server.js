import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import reviewsRouter from "./server/reviews.js";

// Configure dotenv
dotenv.config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite dev server
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Test route with environment variable check
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Server is running!",
    envVars: {
      hasApiKey: !!process.env.GOOGLE_API_KEY,
      hasPlaceId: !!process.env.PLACE_ID
    }
  });
});

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api", reviewsRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API is ready at http://localhost:${PORT}/api/reviews`);
  console.log('Environment check:', {
    nodeEnv: process.env.NODE_ENV,
    hasApiKey: !!process.env.GOOGLE_API_KEY,
    hasPlaceId: !!process.env.PLACE_ID
  });
});

// Enhanced error handling
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});
