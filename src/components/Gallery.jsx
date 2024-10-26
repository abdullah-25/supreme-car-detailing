// components/Gallery.jsx
import { useState } from "react";
import image1 from "../assets/Product_Picture_1.PNG";
import image2 from "../assets/Product_Picture_2.PNG";
import image3 from "../assets/Product_Picture_3.PNG";
import image4 from "../assets/Product_Picture_4.PNG";
import image5 from "../assets/Product_Picture_5.PNG";
import image6 from "../assets/Product_Picture_6.PNG";
import image7 from "../assets/Product_Picture_7.PNG";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const phoneNumber = "(647) 563-5239";

  const images = [
    {
      src: image1,
      alt: "Professional car detailing service in Toronto - Luxury vehicle exterior detailing",
      category: "exterior",
      title: "Premium Exterior Detailing",
      description: "Complete exterior transformation with ceramic coating",
    },
    {
      src: image2,
      alt: "Mobile car detailing Toronto - Professional exterior cleaning service",
      category: "exterior",
      title: "Mobile Detailing Service",
      description: "On-location professional detailing service",
    },
    {
      src: image3,
      alt: "Car interior detailing Toronto - Premium leather seat cleaning",
      category: "interior",
      title: "Interior Deep Clean",
      description: "Thorough interior cleaning and sanitization",
    },
    {
      src: image4,
      alt: "Auto detailing Toronto - Professional dashboard and console cleaning",
      category: "interior",
      title: "Dashboard Detailing",
      description: "Detailed interior component cleaning",
    },
    {
      src: image5,
      alt: "Toronto car detailing service - Complete interior restoration",
      category: "interior",
      title: "Interior Restoration",
      description: "Full interior rejuvenation service",
    },
    {
      src: image6,
      alt: "Best car detailing Toronto - Premium interior cleaning service",
      category: "interior",
      title: "Premium Interior Service",
      description: "Luxury vehicle interior detailing",
    },
    {
      src: image7,
      alt: "Mobile auto detailing Toronto - Professional car cleaning service",
      category: "interior",
      title: "Mobile Interior Service",
      description: "Convenient at-location interior detailing",
    },
  ];
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            COMPLETE INTERIOR AND EXTERIOR MOBILE CAR DETAILING TORONTO
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the pinnacle of automotive care in Toronto. Our mobile
            clean service isn't just perfect for local business professionals.
            At Auto Detailing Pro, our mobile cleaning and valeting service is
            just as perfect for RV owners, motor boat owners, and a variety of
            other vehicle owners in the greater Toronto area.
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Whether you own a small family car or a fleet of commercial cars, we
            can help. We offer the most competitive prices in the industry and
            offer custom detailing and express cleaning services which are
            suitable for all budgets and vehicle types.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={(e) => {
              e.preventDefault();
              // Check if it's mobile device
              if (/Android|iPhone/i.test(navigator.userAgent)) {
                window.location.href = `tel:${phoneNumber}`;
              } else {
                // Show phone number in a modal or tooltip for desktop
                // You can implement a modal state here
                alert("Call us at: 416-999-9999"); // Replace with modal
              }
            }}
          >
            Call Now
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={scrollToContact}
          >
            Schedule Your Service
          </button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Optional Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Version - Carousel */}
        <div className="md:hidden mt-8">
          <div className="relative">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              →
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  currentImage === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
