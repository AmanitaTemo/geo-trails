import { Layout } from "@/components/layout/Layout";
import { Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GeoTrails</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about showcasing the beauty and culture of Georgia through authentic travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="GeoTrails Team" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2015 by a group of passionate local guides, GeoTrails began with a simple mission: to share 
              the authentic beauty of Georgia with travelers from around the world.
            </p>
            <p className="text-lg mb-6">
              What started as a small team leading hiking expeditions in Kazbegi has grown into Georgia's premier 
              tour company, offering diverse experiences from wine tours in Kakheti to cultural explorations of ancient 
              monasteries and traditional villages.
            </p>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-geo-green-600" />
              <span className="font-medium">Our team of 25+ expert local guides</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-geo-green-600">Authenticity</h3>
              <p>We showcase the real Georgia, connecting travelers with local communities and traditions.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-geo-green-600">Sustainability</h3>
              <p>We're committed to environmentally responsible tourism that benefits local communities.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-geo-green-600">Excellence</h3>
              <p>We strive for exceptional service and unforgettable experiences on every tour.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Georgia?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey through the breathtaking landscapes and rich cultural heritage of Georgia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/tours">Browse Our Tours</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Mail className="mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
