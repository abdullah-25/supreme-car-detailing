// components/Footer.jsx
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-black text-white px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <a href="/" className="text-xl font-bold text-white">
              SUPREME AUTO DETAILING
            </a>
            <div className="mt-4 space-y-2">
              <address className="not-italic">
                589 Steven Ct #2, Newmarket, ON L3Y 6Z3
                <br />
                Phone: (647) 563-5239
                <br />
                Email: supremeautodetailing9@gmail.com
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2">
            {/* First Column */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-gray-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Second Column */}
            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#interior" className="hover:text-gray-300">
                    Interior Detailing
                  </a>
                </li>
                <li>
                  <a href="#exterior" className="hover:text-gray-300">
                    Exterior Detailing
                  </a>
                </li>
                <li>
                  <a href="#paint" className="hover:text-gray-300">
                    Paint Correction
                  </a>
                </li>
                <li>
                  <a href="#value" className="hover:text-gray-300">
                    Value Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>

            <a
              href="https://www.instagram.com/supreme.mobile.detailing_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-gray-300"
            >
              Instagram
            </a>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61554371066444&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-gray-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          © {new Date().getFullYear()} Supreme Auto Detailing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
