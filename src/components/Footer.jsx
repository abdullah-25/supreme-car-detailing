// components/Footer.jsx
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <a href="/" className="text-xl font-bold">
              SUPREME
            </a>
            <div className="mt-4 space-y-2">
              <address className="not-italic">
                51 Spruce Ave, East Gwillimbury, ON L9N 0S8
                <br />
                Phone: (647) 563-5239
                <br />
                Email: info@supremeautodetailing.com
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Second Column */}
            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#interior">Interior Detailing</a>
                </li>
                <li>
                  <a href="#exterior">Exterior Detailing</a>
                </li>
                <li>
                  <a href="#paint">Paint Correction</a>
                </li>
                <li>
                  <a href="#value">Value Services</a>
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
              className="inline-block"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          © {new Date().getFullYear()} Supreme Auto Detailing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
