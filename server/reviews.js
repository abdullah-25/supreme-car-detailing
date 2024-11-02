// server/reviews.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Reviews router is working' });
});

router.get('/reviews', async (req, res) => {
  try {
    console.log("Reviews endpoint hit");

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = process.env.PLACE_ID;

    console.log("Environment check:", {
      hasApiKey: !!GOOGLE_API_KEY,
      hasPlaceId: !!PLACE_ID
    });

    if (!GOOGLE_API_KEY || !PLACE_ID) {
      throw new Error("Required environment variables are missing");
    }

    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          place_id: PLACE_ID,
          fields: "reviews,rating,user_ratings_total",
          key: GOOGLE_API_KEY,
        },
      }
    );

    if (!response.data || !response.data.result) {
      throw new Error("Invalid response from Google Places API");
    }

    const { result } = response.data;

    // Filter for 5-star reviews only for display
    const fiveStarReviews = result.reviews
      ? result.reviews.filter(review => review.rating === 5)
      : [];

    res.json({
      reviews: fiveStarReviews, // Only 5-star reviews for display
      rating: result.rating || 0, // Keep original overall rating
      total_reviews: result.user_ratings_total || 0 // Keep original total count
    });

  } catch (error) {
    console.error("Error in reviews endpoint:", error);
    res.status(500).json({
      error: "Failed to fetch Google reviews",
      details: error.message
    });
  }
});

export default router;