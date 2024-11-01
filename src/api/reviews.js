import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Test endpoint to verify router is working
router.get("/test", (req, res) => {
  try {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.set("Expires", "-1");
    res.set("Pragma", "no-cache");
    res.json({
      message: "Reviews API is working",
      envVars: {
        hasApiKey: !!process.env.VITE_GOOGLE_API_KEY,
        hasPlaceId: !!process.env.VITE_PLACE_ID,
        placeId: process.env.VITE_PLACE_ID, // Only for debugging - remove in production
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/reviews", async (req, res) => {
  try {
    // Log environment variables
    console.log("Environment variables:", {
      hasApiKey: !!process.env.VITE_GOOGLE_API_KEY,
      hasPlaceId: !!process.env.VITE_PLACE_ID,
      nodeEnv: process.env.NODE_ENV,
    });

    const GOOGLE_API_KEY = process.env.VITE_GOOGLE_API_KEY;
    const PLACE_ID = process.env.VITE_PLACE_ID;

    // Validate environment variables
    if (!GOOGLE_API_KEY) {
      throw new Error("Google API Key is missing");
    }
    if (!PLACE_ID) {
      throw new Error("Place ID is missing");
    }

    const url = "https://maps.googleapis.com/maps/api/place/details/json";

    console.log("Making request to Google Places API...");
    const response = await axios.get(url, {
      params: {
        place_id: PLACE_ID,
        fields: "reviews,rating,user_ratings_total",
        key: GOOGLE_API_KEY,
      },
    });

    console.log("Google API Response Status:", response.status);
    console.log("Response data:", JSON.stringify(response.data, null, 2));

    // Check if response has the expected structure
    if (!response.data || !response.data.result) {
      console.error("Invalid response structure:", response.data);
      throw new Error("Invalid response from Google Places API");
    }

    const { result } = response.data;

    // Prepare the response data
    const responseData = {
      reviews: result.reviews || [],
      rating: result.rating || 0,
      total_reviews: result.user_ratings_total || 0,
    };

    console.log(
      "Sending response to client:",
      JSON.stringify(responseData, null, 2)
    );
    res.json(responseData);
  } catch (error) {
    console.error("Error in /reviews endpoint:", error);

    // Send a more detailed error response
    res.status(500).json({
      error: "Failed to fetch Google reviews",
      details: error.message,
      type: error.name,
      // Include the error stack in development only
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  }
});

// Mock data endpoint for testing
router.get("/mock-reviews", (req, res) => {
  const mockData = {
    reviews: [
      {
        author_name: "John Doe",
        rating: 5,
        text: "Great service! Would recommend.",
        relative_time_description: "1 week ago",
        profile_photo_url: "https://via.placeholder.com/40",
      },
      // Add more mock reviews as needed
    ],
    rating: 4.9,
    total_reviews: 83,
  };

  res.json(mockData);
});

export default router;
