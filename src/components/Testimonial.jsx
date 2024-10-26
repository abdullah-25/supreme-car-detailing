// components/Testimonials.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Nabil Khan",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "I wasn’t expecting to be so impressed, but wow! My car looks even better than when I first bought it. Every inch is spotless, and the team worked hard to ensure everything was perfect. Definitely the best detailing service I’ve ever used!",
    },
    {
      name: "Mimo Oh",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The team did a fantastic job cleaning the inside and outside of my cars. Very nice people, they made sure I was satisfied with the outcome prior to even mentioning payment.",
    },
    {
      name: "Luba Liebgott",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "They did a fantastic job! My car was a complete disaster i have 2 kids and unfortunately if that wasn't dirty enough  a mouse got in my car and ripped stuff to shreds making confetti everywhere and eating all the fallen food and leaving droppings it was really bad . they came set up shop and scrubbed it all down to practically new looking. I would highly recommend their service.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Customer Feedback
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Don't take our word for it. Trust our customers
        </p>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      {/* <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      /> */}
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "fill-current"
                                  : "stroke-current"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
