import axios from "axios";

export const handler = async (event, context) => {
  try {
    const GOOGLE_API_KEY = process.env.VITE_GOOGLE_API_KEY;
    const PLACE_ID = process.env.VITE_PLACE_ID;

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

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        reviews: response.data.result.reviews || [],
        rating: response.data.result.rating || 0,
        total_reviews: response.data.result.user_ratings_total || 0,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
