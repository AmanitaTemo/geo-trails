
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById } from "@/data/tours";
import { Layout } from "@/components/layout/Layout";
import { BookingForm } from "@/components/booking/BookingForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const tour = id ? getTourById(id) : undefined;
  
  useEffect(() => {
    if (!tour) {
      navigate("/tours", { replace: true });
    }
  }, [tour, navigate]);
  
  if (!tour) {
    return null;
  }
  
  return (
    <Layout>
      <div className="container py-8">
        {/* Tour header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">{tour.title}</h1>
          </div>
          
          <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{tour.duration}</span>
            </div>
            <div className="font-medium text-foreground">
              ${tour.price} per person
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={tour.image} 
              alt={tour.title}
              className="tour-detail-image w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Tour Overview</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {tour.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tour Highlights</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Experience the breathtaking landscapes of {tour.location}</li>
                    <li>Enjoy authentic Georgian cuisine and hospitality</li>
                    <li>Learn about local culture and traditions from expert guides</li>
                    <li>Take stunning photos of Georgia's most beautiful sights</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Group Size</h3>
                  <p className="text-muted-foreground">
                    This tour can accommodate up to {tour.maxGroupSize} travelers. For a more personalized experience, our groups are kept small.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="itinerary" className="space-y-8">
                <h2 className="text-2xl font-semibold mb-4">Tour Itinerary</h2>
                
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-geo-green-500 pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                ))}
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Itinerary may be adjusted due to weather conditions or other unforeseen circumstances to ensure the best experience for our travelers.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="included" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Included in the price:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {tour.includedServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Not included:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>International airfare</li>
                    <li>Travel insurance</li>
                    <li>Personal expenses</li>
                    <li>Alcoholic beverages (unless specified)</li>
                    <li>Tips for guides and drivers (optional)</li>
                  </ul>
                </div>
                
                <Button variant="outline" className="mt-4">
                  Download Full Itinerary PDF
                </Button>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Booking form */}
          <div>
            <BookingForm 
              tourId={tour.id} 
              tourTitle={tour.title} 
              basePrice={tour.price}
              maxGroupSize={tour.maxGroupSize}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TourDetail;
