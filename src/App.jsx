import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import ServiceAreas from "./components/ServiceAreas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { HelmetProvider, Helmet } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>
            Supreme Auto Detailing Toronto | Mobile Car Detailing Services
          </title>
          <meta
            name="description"
            content="Professional mobile car detailing services in Toronto & GTA. Interior, exterior detailing, paint correction & ceramic coating. Book your mobile detailing service today!"
          />
          <meta
            name="keywords"
            content="car detailing toronto, mobile car detailing, auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, GTA car detailing"
          />
          {/* Add structured data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "AutoDetailing",
                "name": "Supreme Auto Detailing",
                "description": "Professional mobile car detailing services in Toronto and GTA",
                "url": "https://supremeautodetailing.ca/",
                "areaServed": [
                  "Toronto",
                  "North York",
                  "Scarborough",
                  "Etobicoke",
                  "Mississauga",
                  "Markham",
                  "Richmond Hill",
                  "vaughan",
                  "Ajax",
                  "Pickering",
                  "Whitby",
                  "Caledon",
                  "Port Credit",
                  "New Market",
                  "Aurora",
                  "Bradford",
                  "Innisfil",
                  "Stouffville",
                  "King City"
                ],
                "service": [
                  "Mobile Car Detailing",
                  "Interior Detailing",
                  "Exterior Detailing",
                  "Paint Correction",
                  "Ceramic Coating"
                ]
              }
            `}
          </script>
        </Helmet>


        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <VideoSection />
        <ServiceAreas />
        <Testimonial />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

