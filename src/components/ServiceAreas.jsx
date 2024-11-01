// components/ServiceAreas.jsx

// components/ServiceAreas.jsx
export default function ServiceAreas() {
  const serviceAreas = {
    "Toronto & East End": {
      description:
        "Professional mobile car detailing services across Toronto and the East End. We come to your location in Toronto, Scarborough, North York, East York, Etobicoke, and the Beaches area.",
      cities: [
        {
          name: "Toronto",
          desc: "Premium mobile car detailing in downtown Toronto and surrounding areas",
        },
        {
          name: "Scarborough",
          desc: "Expert auto detailing services in Scarborough and nearby communities",
        },
        {
          name: "North York",
          desc: "Professional car cleaning and detailing services in North York",
        },
        {
          name: "East York",
          desc: "Mobile car detailing solutions for East York residents",
        },
        {
          name: "Etobicoke",
          desc: "Comprehensive car detailing services in Etobicoke",
        },
        {
          name: "Beaches",
          desc: "Luxury car detailing services in Toronto's Beaches neighborhood",
        },
      ],
    },
    "Durham Region": {
      description:
        "Serving York Region with premium mobile detailing services. We cover Ajax, Pickering, Whitby, Oshawa, Uxbridge, Port Perry.",
      cities: [
        { name: "Ajax", desc: "Professional auto detailing services in Ajax" },
        { name: "Pickering", desc: "Expert car detailing in Pickering" },
        {
          name: "Whitby",
          desc: "Mobile car detailing services throughout Whitby",
        },
        { name: "Oshawa", desc: "Premium auto detailing services in Oshawa" },
        {
          name: "Uxbridge",
          desc: "Professional car detailing solutions in Uxbridge",
        },
        {
          name: "Port Perry",
          desc: "Mobile car detailing in Port Perry and surrounding areas",
        },
      ],
    },
    "York Region": {
      description:
        "Serving Durham Region with premium mobile detailing services. We cover Markham, Richmond Hill, Vaughan, Aurora, Newmarket, Stouffville, and King City.",
      cities: [
        {
          name: "Markham",
          desc: "Professional auto detailing services in Markham",
        },
        {
          name: "Richmond Hill",
          desc: "Expert car detailing in Richmond Hill area",
        },
        {
          name: "Vaughan",
          desc: "Mobile car detailing services throughout Vaughan",
        },
        { name: "Aurora", desc: "Premium auto detailing services in Aurora" },
        {
          name: "Newmarket",
          desc: "Professional car detailing solutions in Newmarket",
        },
        {
          name: "Stouffville",
          desc: "Mobile car detailing in Stouffville and surrounding areas",
        },
        {
          name: "King City",
          desc: "Luxury car detailing services in King City",
        },
      ],
    },
    "Peel Region": {
      description:
        "Serving Peel Region with premium mobile detailing services. We cover Mississauga, Brampton, Caledon, Port Credit, Streetsville.",
      cities: [
        {
          name: "Mississauga",
          desc: "Professional auto detailing services in Mississauga",
        },
        { name: "Brampton", desc: "Expert car detailing in Brampton" },
        {
          name: "Caledon",
          desc: "Mobile car detailing services throughout Caledon",
        },
        {
          name: "Port Credit",
          desc: "Premium auto detailing services in Port Credit",
        },
        {
          name: "Streetsville",
          desc: "Professional car detailing solutions in Streetsville",
        },
      ],
    },
    // Add similar structures for Durham and Peel regions
  };

  return (
    <section className="py-16 bg-white" aria-label="Service Areas">
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO-optimized header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Mobile Car Detailing Services Across Greater Toronto Area
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Supreme Auto Detailing provides professional mobile car detailing
            services throughout the Greater Toronto Area. Our experts come to
            your location, whether you're in Toronto, York Region, Durham
            Region, or Peel Region.
          </p>
        </header>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(serviceAreas).map(([region, data]) => (
            <div
              key={region}
              className="bg-gray-50 p-6 rounded-lg"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">{region}</h3>
              <p className="text-gray-600 mb-4 text-sm">{data.description}</p>
              <ul className="space-y-2">
                {data.cities.map((city) => (
                  <li
                    key={city.name}
                    className="flex items-start"
                    itemProp="areaServed"
                    itemScope
                    itemType="https://schema.org/City"
                  >
                    <span className="text-blue-600 mr-2">›</span>
                    <div>
                      <span itemProp="name" className="font-medium">
                        {city.name}
                      </span>
                      <meta itemProp="description" content={city.desc} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h3 className="text-2xl font-bold mb-4">
            Professional Mobile Car Detailing in Greater Toronto Area
          </h3>
          <p className="text-gray-600">
            Our mobile car detailing service brings professional-grade equipment
            and expertise directly to your location. Whether you're in downtown
            Toronto, the bustling suburbs of York Region, the growing
            communities of Durham Region, or the dynamic cities of Peel Region,
            we provide the same high-quality service at your convenience.
          </p>

          {/* Service Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold mb-2">Convenient Mobile Service</h4>
              <p className="text-sm">
                We come to your location anywhere in the GTA
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">Flexible Scheduling</h4>
              <p className="text-sm">
                Available 7 days a week across all service areas
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">Professional Equipment</h4>
              <p className="text-sm">
                Same high-quality service at any location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "Supreme Auto Detailing",
          description:
            "Mobile car detailing services across Greater Toronto Area",
          areaServed: [
            // Toronto & East End
            {
              "@type": "City",
              name: "Toronto",
              containedIn: "Greater Toronto Area",
            },
            {
              "@type": "City",
              name: "Scarborough",
              containedIn: "Toronto",
            },
            {
              "@type": "City",
              name: "North York",
              containedIn: "Toronto",
            },
            {
              "@type": "City",
              name: "East York",
              containedIn: "Toronto",
            },
            {
              "@type": "City",
              name: "Etobicoke",
              containedIn: "Toronto",
            },
            {
              "@type": "City",
              name: "Beaches",
              containedIn: "Toronto",
            },

            // York Region
            {
              "@type": "City",
              name: "Markham",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Richmond Hill",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Vaughan",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Aurora",
              containedIn: "York Region",
            },
            {
              "@type": "City",
              name: "Newmarket",
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
            },

            // Durham Region
            {
              "@type": "City",
              name: "Ajax",
              containedIn: "Durham Region",
            },
            {
              "@type": "City",
              name: "Pickering",
              containedIn: "Durham Region",
            },
            {
              "@type": "City",
              name: "Whitby",
              containedIn: "Durham Region",
            },
            {
              "@type": "City",
              name: "Oshawa",
              containedIn: "Durham Region",
            },
            {
              "@type": "City",
              name: "Uxbridge",
              containedIn: "Durham Region",
            },
            {
              "@type": "City",
              name: "Port Perry",
              containedIn: "Durham Region",
            },

            // Peel Region
            {
              "@type": "City",
              name: "Mississauga",
              containedIn: "Peel Region",
            },
            {
              "@type": "City",
              name: "Brampton",
              containedIn: "Peel Region",
            },
            {
              "@type": "City",
              name: "Caledon",
              containedIn: "Peel Region",
            },
            {
              "@type": "City",
              name: "Port Credit",
              containedIn: "Mississauga",
            },
            {
              "@type": "City",
              name: "Streetsville",
              containedIn: "Mississauga",
            },
          ],
          serviceType: "Mobile Car Detailing",
          provider: {
            "@type": "LocalBusiness",
            name: "Supreme Auto Detailing",
            image: "your-logo-url",
            telephone: "647-563-5239",
            priceRange: "$90-$300",
            address: {
              "@type": " 51 Spruce Ave, East Gwillimbury, ON L9N 0S8",
              addressRegion: "Ontario",
              addressCountry: "CA",
            },
          },
        })}
      </script>
    </section>
  );
}

// export default function ServiceAreas() {
//   const scrollToContact = () => {
//     document.getElementById("contact").scrollIntoView({
//       behavior: "smooth",
//     });
//   };
//   const serviceAreas = [
//     {
//       region: "Toronto & East End",
//       cities: [
//         "Toronto",
//         "Scarborough",
//         "North York",
//         "East York",
//         "Etobicoke",
//         "Beaches",
//       ],
//     },
//     {
//       region: "York Region",
//       cities: [
//         "Markham",
//         "Richmond Hill",
//         "Vaughan",
//         "Aurora",
//         "Newmarket",
//         "Stouffville",
//         "King City",
//       ],
//     },
//     {
//       region: "Durham Region",
//       cities: [
//         "Ajax",
//         "Pickering",
//         "Whitby",
//         "Oshawa",
//         "Uxbridge",
//         "Port Perry",
//       ],
//     },
//     {
//       region: "Peel Region",
//       cities: [
//         "Mississauga",
//         "Brampton",
//         "Caledon",
//         "Port Credit",
//         "Streetsville",
//       ],
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Supreme Auto Detailing provides mobile car detailing services across
//             the Greater Toronto Area. Our professional team comes to your
//             location, whether it's your home or office.
//           </p>
//         </div>

//         {/* Service Areas Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {serviceAreas.map((area, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
//             >
//               <h3 className="text-xl font-bold mb-4 text-blue-600">
//                 {area.region}
//               </h3>
//               <ul className="space-y-2">
//                 {area.cities.map((city, cityIndex) => (
//                   <li
//                     key={cityIndex}
//                     className="flex items-center text-gray-600"
//                   >
//                     <svg
//                       className="w-4 h-4 mr-2 text-blue-600"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path d="M9 5l7 7-7 7" />
//                     </svg>
//                     {city}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-6">
//             Don't see your area listed? Contact us to check if we service your
//             location!
//           </p>
//           <div className="flex justify-center gap-4">
//             <button
//               className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
//               onClick={scrollToContact}
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="mt-16 grid md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 className="w-8 h-8 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//             <h3 className="font-bold mb-2">Convenient Mobile Service</h3>
//             <p className="text-gray-600">
//               We come to your location anywhere in the GTA
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 className="w-8 h-8 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <h3 className="font-bold mb-2">Flexible Scheduling</h3>
//             <p className="text-gray-600">
//               Available 7 days a week, early morning to evening
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 className="w-8 h-8 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <h3 className="font-bold mb-2">Service Guarantee</h3>
//             <p className="text-gray-600">
//               100% satisfaction guaranteed on all services
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
