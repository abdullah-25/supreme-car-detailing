import axios from "axios";

export const handler = async (event, context) => {
  try {
    console.log("Function triggered with event:", event);

    // Use non-VITE prefixed env variables for Netlify functions
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = process.env.PLACE_ID;

    // Validate environment variables
    if (!GOOGLE_API_KEY || !PLACE_ID) {
      console.error("Missing environment variables:", {
        hasApiKey: !!GOOGLE_API_KEY,
        hasPlaceId: !!PLACE_ID,
      });
      throw new Error("Required environment variables are missing");
    }

    console.log("Making request to Google Places API...");
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

    console.log("Google API Response Status:", response.status);

    if (!response.data || !response.data.result) {
      console.error("Invalid response structure:", response.data);
      throw new Error("Invalid response from Google Places API");
    }

    const { result } = response.data;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store, no-cache, must-revalidate, private",
        Expires: "-1",
        Pragma: "no-cache",
      },
      body: JSON.stringify({
        reviews: result.reviews || [],
        rating: result.rating || 0,
        total_reviews: result.user_ratings_total || 0,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Failed to fetch Google reviews",
        details: error.message,
        type: error.name,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      }),
    };
  }
};
