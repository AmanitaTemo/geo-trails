
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Calendar, Navigation, Route } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  // Display only featured tours (first 3)
  const featuredTours = tours.slice(0, 3);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Svaneti.jpg')"
      }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Discover Georgia's Hidden Gems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Expert-guided tours through breathtaking landscapes and cultural treasures
          </p>
          <div className="space-x-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/tours">
              <Button size="lg" className="bg-geo-green-600 hover:bg-geo-green-700 text-white">
                Explore Tours
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-geo-green-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Why choose us section */}
      <section className="py-20 bg-geo-green-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GeoTrails?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience Georgia like never before with our expert-guided tours tailored to create unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-geo-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-8 w-8 text-geo-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable local guides share insider perspectives and hidden gems
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-geo-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Route className="h-8 w-8 text-geo-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unique Routes</h3>
              <p className="text-muted-foreground">
                Carefully crafted itineraries showcasing Georgia's most breathtaking spots
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-geo-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-geo-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Experience</h3>
              <p className="text-muted-foreground">
                Authentic cultural immersion with traditional food, wine and hospitality
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-geo-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-geo-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Timing</h3>
              <p className="text-muted-foreground">
                Various tour durations to fit your schedule, from day trips to multi-day adventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured tours section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular adventures across Georgia's diverse landscapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tours">
              <Button variant="outline" size="lg" className="border-geo-green-600 text-geo-green-600 hover:bg-geo-green-600 hover:text-white">
                View All Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Call to action */}
      <section className="py-20 bg-geo-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Georgia?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your adventure today and discover the beauty, culture, and hospitality of Georgia
          </p>
          <Link to="/tours">
            <Button size="lg" className="bg-white text-geo-green-700 hover:bg-geo-green-100">
              Browse All Tours
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
