import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";

const REVIEWS_PER_PAGE = 4;
const PLACE_ID = import.meta.env.VITE_PLACE_ID;
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
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);

      const response = await fetch("/.netlify/functions/reviews");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Invalid content type:", contentType, "Response:", text);
        throw new Error("Response is not JSON");
      }
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setReviews(data.reviews);
      setRating(data.rating);
      setTotalReviews(data.total_reviews);
    } catch (err) {
      setError(err.message);
      setReviews(MOCK_REVIEWS);
      console.error("Error fetching reviews:", err);
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
          <strong className="font-bold">Error: </strong>
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
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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
                  className={`w-5 h-5 ${
                    i < Math.round(rating)
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
          href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
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
              <button
                onClick={() => window.open(review.author_url, "_blank")}
                className="text-gray-500 mt-2 text-sm hover:text-blue-500"
              >
                Read more
              </button>
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
              className={`w-2 h-2 rounded-full ${
                index === currentPage ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       name: "Nabil Khan",
//       rating: 5,
//       text: "I wasn't expecting to be so impressed, but wow! My car looks even better than when I first bought it. Every inch is spotless, and the team worked hard to ensure everything was perfect. Definitely the best detailing service I've ever used!",
//     },
//     {
//       name: "Mimo Oh",

//       rating: 5,
//       text: "The team did a fantastic job cleaning the inside and outside of my cars. Very nice people, they made sure I was satisfied with the outcome prior to even mentioning payment.",
//     },
//     {
//       name: "Luba Liebgott",

//       rating: 5,
//       text: "They did a fantastic job! My car was a complete disaster i have 2 kids and unfortunately if that wasn't dirty enough  a mouse got in my car and ripped stuff to shreds making confetti everywhere and eating all the fallen food and leaving droppings it was really bad . they came set up shop and scrubbed it all down to practically new looking. I would highly recommend their service.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-3xl mx-auto">
//         {" "}
//         {/* Reduced max width */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           Our Customer Feedback
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           Don't take our word for it. Trust our customers
//         </p>
//         <div className="relative px-4 md:px-0">
//           {" "}
//           {/* Added padding control */}
//           {/* Testimonial Card */}
//           <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mx-auto max-w-2xl">
//             <div className="space-y-4">
//               {/* Customer Name */}
//               <h3 className="text-xl font-bold text-gray-900">
//                 {testimonials[currentSlide].name}
//               </h3>

//               {/* Star Rating */}
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-5 h-5 text-yellow-400 fill-current"
//                   />
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {testimonials[currentSlide].text}
//               </p>
//             </div>
//           </div>
//           {/* Navigation Buttons */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === 0 ? testimonials.length - 1 : prev - 1
//               )
//             }
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) => (prev + 1) % testimonials.length)
//             }
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>
//           {/* Dots Navigation */}
//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   currentSlide === index ? "w-4 bg-blue-600" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // components/Testimonials.jsx
