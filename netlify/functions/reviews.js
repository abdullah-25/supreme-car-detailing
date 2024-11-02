import * as dotenv from 'dotenv';
dotenv.config();

export const handler = async (event, context) => {
  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = process.env.PLACE_ID;

    if (!GOOGLE_API_KEY || !PLACE_ID) {
      throw new Error("Required environment variables are missing");
    }

    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`
      );
      

    if (!response.data || !response.data.result) {
      throw new Error("Invalid response from Google Places API");
    }

    const { result } = response.data;

    const fiveStarReviews = result.reviews
      ? result.reviews.filter(review => review.rating === 5)
      : [];

    return {
      statusCode: 200,
      body: JSON.stringify({
        reviews: fiveStarReviews,
        rating: result.rating || 0,
        total_reviews: result.user_ratings_total || 0,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch Google reviews",
        message: error.message,
      }),
    };
  }
};
