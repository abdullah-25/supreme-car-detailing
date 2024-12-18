import heroimg from "../assets/Product_Image_Hero.PNG";
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Star, Shield, MapPin, Menu } from 'lucide-react'

// components/Hero.jsx
export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToGallery = () => {
    document.getElementById("gallery").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroimg}
          alt="Professional car detailing service in Toronto" // SEO-friendly alt text
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Supreme Auto Detailing
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Experience luxury car care at your doorstep. Our mobile detailing service brings professional-grade results directly to you.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
            onClick={scrollToContact}
          >
            Book Now
          </button>
          <button
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
            onClick={scrollToGallery}
          >
            Learn More
          </button>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-24">
          {[
            { icon: Shield, text: "Fully Insured" },
            { icon: Star, text: "5-Star Service" },
            { icon: MapPin, text: "Mobile Detailing" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="flex items-center gap-3 text-white/80"
            >
              <item.icon className="h-6 w-6 text-blue-500" />
              <span className="text-lg">{item.text}</span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
