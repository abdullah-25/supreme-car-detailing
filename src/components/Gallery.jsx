import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import OptimizedImage from "./OptimizedImage";

// Import images with ?url query
import image1 from "@/assets/Product_Picture_1.PNG";
import image2 from "@/assets/Product_Picture_2.PNG";
import image3 from "@/assets/Product_Picture_3.PNG";
import image4 from "@/assets/Product_Picture_4.PNG";
import image5 from "@/assets/Product_Picture_5.PNG";
import image6 from "@/assets/Product_Picture_6.PNG";
import image7 from "@/assets/Product_Picture_7.PNG";
import image8 from "@/assets/Product_Picture_8.PNG";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const phoneNumber = "(647) 563-5239";
  useEffect(() => {
    console.log('Image URLs:', {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8
    });
  }, []);

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
    {
      src: image8,
      alt: "Mobile auto detailing Toronto - Professional car cleaning service",
      category: "interior",
      title: "Mobile Interior Service",
      description: "Luxury vehicle interior detailing",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Preload images
  useEffect(() => {
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, []);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg"
            >
              {!isLoading && (
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <h3 className="font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        {!isLoading && (
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-lg" {...handlers}>
              <div className="relative aspect-[4/3] transition-transform duration-300">
                <OptimizedImage
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">
                      {images[currentImage].title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {images[currentImage].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentImage === index ? "bg-blue-600 w-4" : "bg-gray-300"
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>
    </section>
  );
}
