
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Navigation className="h-6 w-6 text-geo-green-600" />
          <Link to="/" className="font-bold text-xl text-geo-green-600">
            GeoTrails
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-geo-green-600 transition-colors">
            Home
          </Link>
          <Link to="/tours" className="text-sm font-medium hover:text-geo-green-600 transition-colors">
            Tours
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-geo-green-600 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-geo-green-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default">
            Book a Tour
          </Button>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2"
        >
          <span className="sr-only">Open menu</span>
          {/* Simple hamburger icon */}
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-geo-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/tours" className="text-sm font-medium hover:text-geo-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Tours
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-geo-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-geo-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button variant="default" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Book a Tour
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
