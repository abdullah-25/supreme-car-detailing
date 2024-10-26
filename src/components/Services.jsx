// components/Services.jsx
export default function Services() {
  const services = [
    {
      title: "Mobile Car Detailing Toronto",
      shortTitle: "Mobile Detailing",
      description:
        "Experience the ultimate convenience with our professional mobile detailing service at your location in Toronto & GTA. Our skilled technicians bring state-of-the-art equipment and eco-friendly products directly to your home or office.",
      longDescription:
        "Our mobile car detailing service in Toronto brings the complete auto spa experience to your doorstep. We understand your time is valuable, which is why we offer flexible scheduling and comprehensive mobile services.",
      features: [
        "Convenient at-location service across GTA",
        "Professional-grade equipment and products",
        "Fully insured and certified technicians",
        "Flexible scheduling - 7 days a week",
        "Eco-friendly cleaning solutions",
      ],
      pricing: "Starting from $99",
      icon: "🚗",
      link: "/services/mobile-detailing",
    },
    {
      title: "Interior Car Detailing Services",
      shortTitle: "Interior Detailing",
      description:
        "Professional interior car cleaning and sanitization services in Toronto. We use advanced steam cleaning technology, premium leather conditioning, and thorough vacuum processes.",
      longDescription:
        "Transform your vehicle's interior with our comprehensive detailing service. We focus on every detail from thorough vacuuming to steam cleaning and sanitization of all surfaces.",
      features: [
        "Deep cleaning of seats and carpets",
        "Steam sanitization of surfaces",
        "Leather cleaning and conditioning",
        "Air vent cleaning and sanitization",
        "Complete interior protection treatment",
      ],
      pricing: "Starting from $159",
      icon: "🧹",
      link: "/services/interior-detailing",
    },
    {
      title: "Exterior Car Detailing Toronto",
      shortTitle: "Exterior Detailing",
      description:
        "Premium exterior car detailing services including paint correction, ceramic coating, and long-lasting wax protection. Restore your vehicle's showroom shine.",
      longDescription:
        "Our exterior detailing service goes beyond regular car washing. We use advanced techniques and premium products to protect and enhance your vehicle's appearance.",
      features: [
        "Professional paint correction",
        "Ceramic coating application",
        "Premium wax protection",
        "Wheel and tire detailing",
        "Glass cleaning and protection",
      ],
      pricing: "Starting from $189",
      icon: "✨",
      link: "/services/exterior-detailing",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Professional detailing services for every need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
