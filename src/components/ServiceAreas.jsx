// components/ServiceAreas.jsx
export default function ServiceAreas() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  const serviceAreas = [
    {
      region: "Toronto & East End",
      cities: [
        "Toronto",
        "Scarborough",
        "North York",
        "East York",
        "Etobicoke",
        "Beaches",
      ],
    },
    {
      region: "York Region",
      cities: [
        "Markham",
        "Richmond Hill",
        "Vaughan",
        "Aurora",
        "Newmarket",
        "Stouffville",
        "King City",
      ],
    },
    {
      region: "Durham Region",
      cities: [
        "Ajax",
        "Pickering",
        "Whitby",
        "Oshawa",
        "Uxbridge",
        "Port Perry",
      ],
    },
    {
      region: "Peel Region",
      cities: [
        "Mississauga",
        "Brampton",
        "Caledon",
        "Port Credit",
        "Streetsville",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Supreme Auto Detailing provides mobile car detailing services across
            the Greater Toronto Area. Our professional team comes to your
            location, whether it's your home or office.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {area.region}
              </h3>
              <ul className="space-y-2">
                {area.cities.map((city, cityIndex) => (
                  <li
                    key={cityIndex}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your area listed? Contact us to check if we service your
            location!
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
              onClick={scrollToContact}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Convenient Mobile Service</h3>
            <p className="text-gray-600">
              We come to your location anywhere in the GTA
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Available 7 days a week, early morning to evening
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Service Guarantee</h3>
            <p className="text-gray-600">
              100% satisfaction guaranteed on all services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
