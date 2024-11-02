// components/ServiceAreas.jsx
export default function ServiceAreas() {
  const serviceAreas = {
    "York Region": {
      description:
        "Premium mobile detailing services in Newmarket and surrounding York Region areas within 25km. We provide professional car detailing services right at your location.",
      cities: [
        {
          name: "Newmarket",
          desc: "Our home base - professional car detailing solutions in Newmarket",

        },
        {
          name: "Aurora",
          desc: "Premium auto detailing services in Aurora",

        },
        {
          name: "East Gwillimbury",
          desc: "Expert mobile detailing in East Gwillimbury and Holland Landing",

        },
        {
          name: "Bradford",
          desc: "Professional car detailing services in Bradford",

        },
        {
          name: "Keswick",
          desc: "Mobile car detailing services in Keswick",

        },
        {
          name: "Innisfil",
          desc: "Quality auto detailing in Innisfil",

        },
        {
          name: "Stouffville",
          desc: "Expert car detailing services in Stouffville",

        },
        {
          name: "King City",
          desc: "Professional detailing services in King City",

        },
        {
          name: "New Tecumseth",
          desc: "Professional detailing services in New Tecumseth",

        }
      ],
    }
  };

  return (
    <section className="py-16 bg-white" aria-label="Service Areas">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Mobile Car Detailing Services in Newmarket & Surrounding Areas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Supreme Auto Detailing provides professional mobile car detailing
            services. Our experts bring our premium service
            directly to you, serving all surrounding communities in York Region.
          </p>
        </header>

        <div className="grid md:grid-cols-1 gap-8">
          {Object.entries(serviceAreas).map(([region, data]) => (
            <div
              key={region}
              className="bg-gray-50 p-6 rounded-lg"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">{region}</h3>
              <p className="text-gray-600 mb-4 text-sm">{data.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.cities.map((city) => (
                  <div
                    key={city.name}
                    className="bg-white p-4 rounded-lg shadow-sm"
                    itemProp="areaServed"
                    itemScope
                    itemType="https://schema.org/City"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span itemProp="name" className="font-medium text-blue-600">
                        {city.name}
                      </span>
                      <span className="text-sm text-gray-500">{city.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600" itemProp="description">
                      {city.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "Supreme Auto Detailing",
          description:
            "Mobile car detailing services in Newmarket and surrounding region",
          areaServed: [
            {
              "@type": "City",
              name: "Newmarket",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Aurora",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "East Gwillimbury",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Bradford",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Sharon",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Mount Albert",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Stouffville",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "King City",
              containedIn: "York Region",
            }
          ],
          serviceType: "Mobile Car Detailing",
          provider: {
            "@type": "LocalBusiness",
            name: "Supreme Auto Detailing",
            image: "your-logo-url",
            telephone: "647-563-5239",
            priceRange: "$90-$300",
            address: {
              "@type": "PostalAddress",
              streetAddress: "51 Spruce Ave",
              addressLocality: "East Gwillimbury",
              addressRegion: "Ontario",
              postalCode: "L9N 0S8",
              addressCountry: "CA",
            },
          },
        })}
      </script>
    </section>
  );
}

