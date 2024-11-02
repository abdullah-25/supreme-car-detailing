import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";

const REVIEWS_PER_PAGE = 4;

// Mock data for fallback
const MOCK_REVIEWS = [
  {
    author_name: "Test User",
    rating: 5,
    text: "Great service!",
    relative_time_description: "1 week ago",
    profile_photo_url: "/api/placeholder/40/40",
  },
];

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    console.log('Component mounted, environment:', process.env.NODE_ENV);
    if (!import.meta.env.PLACE_ID) {
      console.warn('Missing PLACE_ID environment variable');
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    console.log('State updated:', {
      loading,
      error,
      reviewsCount: reviews.length,
      currentRating: rating,
      totalReviews
    });
  }, [loading, error, reviews, rating, totalReviews]);

  const fetchReviews = async () => {
    console.log('Fetching reviews...');
    try {
      const response = await fetch('/.netlify/functions/reviews');
      console.log('Response status:', response.status);
      console.log('Content type:', response.headers.get('content-type'));

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, text: ${errorText}`);
      }

      // Parse JSON only once
      const data = await response.json();
      console.log('Parsed data:', data);

      setReviews(data.reviews || []);
      setRating(data.rating || 0);
      setTotalReviews(data.total_reviews || 0);

    } catch (err) {
      console.error('Error in fetchReviews:', err);
      setError(err.message);
      setReviews(MOCK_REVIEWS);
    } finally {
      setLoading(false);
    }
  };
  const getPageReviews = () => {
    const start = currentPage * REVIEWS_PER_PAGE;
    return reviews.slice(start, start + REVIEWS_PER_PAGE);
  };

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error loading reviews: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        What our customers say
      </h1>

      <div className="mb-8 bg-gray-50 p-6 rounded-lg flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://services.google.com/fh/files/misc/google_g_icon_download.png"
              alt="Google"
              className="h-6 object-contain"
            />
            <span className="ml-2 font-bold">Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                    }`}
                />
              ))}
            </div>
            <span className="text-gray-500">({totalReviews})</span>
          </div>
        </div>
        <a
          href={`https://search.google.com/local/writereview?placeid=${import.meta.env.PLACE_ID || ''}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Review us on Google
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {getPageReviews().map((review, index) => (
          <Card key={index} className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={review.profile_photo_url || "/api/placeholder/40/40"}
                  alt={review.author_name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="font-medium">{review.author_name}</h3>
                    <span className="text-blue-500">✓</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 line-clamp-2">{review.text}</p>
              {review.author_url && (
                <button
                  onClick={() => window.open(review.author_url, "_blank")}
                  className="text-gray-500 mt-2 text-sm hover:text-blue-500"
                >
                  Read more
                </button>
              )}
            </CardContent>
          </Card>
        ))}

        {reviews.length > REVIEWS_PER_PAGE && (
          <button
            onClick={nextPage}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentPage ? "bg-blue-500" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
