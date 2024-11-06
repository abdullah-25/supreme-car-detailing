// components/Pricing.jsx
import { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("interior");

  const tabs = [
    { id: "interior", label: "Interior packages" },
    { id: "exterior", label: "Exterior packages" },
    { id: "combo", label: "Combo packages" },
    { id: "additional", label: "Additional services" },
  ];

  const pricing = {
    interior: [
      {
        name: "Basic Package",
        description: "Ideal for vehicles needing a light maintenance detail",
        features: [
          "Express vacuum of seats, carpets, and floor mats",
          "Detailed dusting of interior surfaces",
          "Wipe-down of dashboard, console, and doors",
          "Conditioning of rubber mats",
        ],
        prices: {
          "Sedan / Coupe": 99,
          "Suv / crossover": 119,
          "Large Suv/Truck": 139,
          "Mini van": 160,
        },
        note: "This package does not include shampooing, steam cleaning, or conditioning.",
      },
      {
        name: "Supreme Package",
        description: "Ideal for vehicles needing a deep clean detail",
        features: [
          "Full interior vacuum of seats, carpets, and floor mats",
          "Shampooing of seats, carpets, and upholstery",
          "Steam cleaning of high-contact surfaces",
          "Leather or fabric conditioning to restore and protect materials",
          "Detailed cleaning of dashboard, console, doors, vents and all crevices",
          "Windows & door jambs, rubber mats, cleaned",
        ],
        prices: {
          "Sedan / Coupe": 159,
          "Suv / crossover": 169,
          "Large SUV / Truck": 199,
          "Mini van": 239,
        },
      },
    ],
    exterior: [
      {
        name: "Exterior Basic",
        description: "Ideal for vehicles needing a light maintenance detail",
        features: [
          "Hand wash and dry",
          "Foam Cannon pre-wash",
          "Wheel cleaning and tire dressing",
          "Tar & bug removed",
          "Wipe-down of dashboard, console, and doors",
          "Ceramic spray application for protection (2 months protection)",
        ],
        prices: {
          sedan: 39,
          suv: 49,
          van: 49,
        },
        note: "This package does not include shampooing, steam cleaning, or conditioning.",
      },
      // {
      //   name: "Clay & Seal",
      //   description: "Ideal for vehicles needing a deep clean detail",
      //   features: [
      //     "Includes all services from Basic Exterior Package",
      //     "Iron decontamination to eliminate orange spots",
      //     "Clay bar treatment to remove contaminants",
      //     "Ceramic sealant application (8-12 months protection)",
      //   ],
      //   prices: {
      //     sedan: 99,
      //     suv: 129,
      //     van: 139,
      //   },
      // },
    ],
    combo: [
      {
        name: "Maintenance Package",
        description:
          "For vehicles receiving a light maintenance detail every 1-2 months",
        features: [
          "Include all services from Basic Exterior Package",
          "Include all services from Basic Interior Package",
        ],
        prices: {
          "Sedan / Coupe": 120,
          "SUV / Truck": 140,
          "Mini van / 7 seater SUV": 160,
        },
        note: "This package can only be purchased after completing our top package, the Supreme Package.",
      },
      {
        name: "Supreme Interior & Exterior Basic",
        description:
          "Ideal for vehicles needing a deep clean detail inside & out",
        features: [
          "Include all services from Supreme Interior Packages, plus:",
          "Include all services from Exterior Package",
        ],
        prices: {
          "Sedan / Coupe": 199,
          "SUV / crossover": 219,
          "Large Suv / Truck": 249,
          "Mini van": 289,
        },
      },
    ],
    additional: [
      {
        name: "Additional Services",
        description: "Extra services to enhance your detailing experience",
        features: [
          "Headlight Restoration - $80 (Pair)",
          "Engine Shampoo & Detail - $50",
          "Ozone Odour Removal Treatment - $80",
          "Iron decon (orange spots) - $50",
          "1 year ceramic coating - $50",
          "Ceramic Wheel Coating - $100",
          "Window Ceramic Coating - $100",
          "Headliner Shampoo (Roof) - $40",
          "Ceramic Floor mats - $50",
          "Window Tinting - contact us for quote",
          "Paint Correction - contact us for quote"
        ],
        note: "Any vehicles that require pet hair removal will incur an additional surcharge starting at $30+ For vehicles with excessive dirt accumulation, the surcharge begins at $50+",
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full ${activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {pricing[activeTab]?.map((pkg, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${pkg.name.includes("Supreme") ? "bg-orange-50" : "bg-gray-50"
                }`}
            >
              <h3
                className={`text-2xl font-bold mb-2 ${pkg.name.includes("Supreme")
                  ? "text-orange-600"
                  : "text-gray-900"
                  }`}
              >
                {pkg.name}
              </h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Conditional rendering for prices */}
              {pkg.prices && (
                <div className="space-y-2">
                  <p className="font-bold">Sedan / Coupe ${pkg.prices.sedan}</p>
                  <p className="font-bold">SUV / Truck ${pkg.prices.suv}</p>
                  <p className="font-bold">
                    Mini Van / 7 seater SUV ${pkg.prices.van}
                  </p>
                </div>
              )}

              {pkg.note && (
                <p className="mt-4 text-sm text-gray-500">{pkg.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
