import { Link } from "react-router-dom";
import { Mail, Navigation } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-geo-green-800 text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <Navigation className="h-6 w-6" />
            <span className="font-bold text-xl">GeoTrails</span>
          </div>
          <p className="text-sm text-gray-300 max-w-xs">
            Discover the most beautiful trails and experiences in Georgia with our expert-guided tours.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tours" className="text-sm text-gray-300 hover:text-white transition-colors">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Popular Tours</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tours/kazbegi-adventure" className="text-sm text-gray-300 hover:text-white transition-colors">
                Kazbegi Adventure
              </Link>
            </li>
            <li>
              <Link to="/tours/tbilisi-city" className="text-sm text-gray-300 hover:text-white transition-colors">
                Tbilisi City Tour
              </Link>
            </li>
            <li>
              <Link to="/tours/kakheti-wine" className="text-sm text-gray-300 hover:text-white transition-colors">
                Kakheti Wine Experience
              </Link>
            </li>
            <li>
              <Link to="/tours/svaneti-trek" className="text-sm text-gray-300 hover:text-white transition-colors">
                Svaneti Trek
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>123 Tourism Street</p>
            <p>Tbilisi, Georgia</p>
            <p>+995 555 123 456</p>
            <div className="flex items-center gap-2 pt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@geotrails.com" className="hover:text-white transition-colors">
                info@geotrails.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-geo-green-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} GeoTrails. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
